import { createRemoteJWKSet, jwtVerify } from 'jose';
import type { AuthUser, KeycloakTokenClaims, OidcDiscovery, TokenPair } from '@mealodic/shared';
import { AppRole } from '@mealodic/shared';

export interface KeycloakClientOptions {
  baseUrl: string;
  realm: string;
  clientId: string;
  clientSecret?: string;
}

export class KeycloakClient {
  private readonly issuerUrl: string;
  private readonly tokenEndpoint: string;
  private readonly userinfoEndpoint: string;
  private readonly endSessionEndpoint: string;
  private readonly jwksUrl: string;
  private jwks: ReturnType<typeof createRemoteJWKSet> | null = null;

  constructor(private readonly options: KeycloakClientOptions) {
    const realmUrl = `${options.baseUrl}/realms/${options.realm}`;
    this.issuerUrl = realmUrl;
    this.tokenEndpoint = `${realmUrl}/protocol/openid-connect/token`;
    this.userinfoEndpoint = `${realmUrl}/protocol/openid-connect/userinfo`;
    this.endSessionEndpoint = `${realmUrl}/protocol/openid-connect/logout`;
    this.jwksUrl = `${realmUrl}/protocol/openid-connect/certs`;
  }

  getDiscovery(): OidcDiscovery {
    return {
      issuer: this.issuerUrl,
      authorization_endpoint: `${this.issuerUrl}/protocol/openid-connect/auth`,
      token_endpoint: this.tokenEndpoint,
      userinfo_endpoint: this.userinfoEndpoint,
      end_session_endpoint: this.endSessionEndpoint,
      jwks_uri: this.jwksUrl,
      introspection_endpoint: `${this.issuerUrl}/protocol/openid-connect/token/introspect`,
    };
  }

  private getJwks() {
    if (!this.jwks) {
      this.jwks = createRemoteJWKSet(new URL(this.jwksUrl));
    }
    return this.jwks;
  }

  async verifyToken(token: string): Promise<KeycloakTokenClaims> {
    const jwks = this.getJwks();
    const { payload } = await jwtVerify(token, jwks, {
      issuer: this.issuerUrl,
    });
    return payload as unknown as KeycloakTokenClaims;
  }

  extractUser(claims: KeycloakTokenClaims): AuthUser {
    const roles = this.extractRoles(claims);
    return {
      id: claims.sub,
      email: claims.email,
      emailVerified: claims.email_verified,
      name: claims.name ?? claims.preferred_username,
      roles,
    };
  }

  private extractRoles(claims: KeycloakTokenClaims): AppRole[] {
    const rawRoles: string[] = claims.realm_roles ?? claims.realm_access?.roles ?? [];

    return rawRoles.filter((r): r is AppRole => Object.values(AppRole).includes(r as AppRole));
  }

  async refreshToken(refreshToken: string): Promise<TokenPair> {
    const body = new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: this.options.clientId,
      refresh_token: refreshToken,
    });

    if (this.options.clientSecret) {
      body.set('client_secret', this.options.clientSecret);
    }

    const response = await fetch(this.tokenEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Token refresh failed (${response.status}): ${text}`);
    }

    const data = (await response.json()) as Record<string, unknown>;
    return {
      accessToken: data.access_token as string,
      refreshToken: data.refresh_token as string,
      expiresIn: data.expires_in as number,
      refreshExpiresIn: data.refresh_expires_in as number,
      tokenType: data.token_type as string,
    };
  }

  async revokeToken(
    token: string,
    tokenTypeHint: 'access_token' | 'refresh_token' = 'refresh_token',
  ): Promise<void> {
    const body = new URLSearchParams({
      client_id: this.options.clientId,
      token,
      token_type_hint: tokenTypeHint,
    });

    if (this.options.clientSecret) {
      body.set('client_secret', this.options.clientSecret);
    }

    const response = await fetch(`${this.issuerUrl}/protocol/openid-connect/revoke`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Token revocation failed (${response.status}): ${text}`);
    }
  }
}
