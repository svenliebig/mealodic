export enum AppRole {
  User = "user",
  Admin = "admin",
}

export interface AuthUser {
  id: string;
  email: string;
  emailVerified: boolean;
  name?: string;
  roles: AppRole[];
}

export interface KeycloakTokenClaims {
  sub: string;
  email: string;
  email_verified: boolean;
  preferred_username: string;
  given_name?: string;
  family_name?: string;
  name?: string;
  realm_roles?: string[];
  realm_access?: {
    roles: string[];
  };
  exp: number;
  iat: number;
  iss: string;
  aud: string | string[];
  azp: string;
  typ: string;
  scope: string;
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  refreshExpiresIn: number;
  tokenType: string;
}

export interface OidcDiscovery {
  issuer: string;
  authorization_endpoint: string;
  token_endpoint: string;
  userinfo_endpoint: string;
  end_session_endpoint: string;
  jwks_uri: string;
  introspection_endpoint: string;
}

export interface AuthConfig {
  keycloakBaseUrl: string;
  realm: string;
  clientId: string;
  clientSecret?: string;
}
