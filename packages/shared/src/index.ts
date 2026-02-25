export * from './types/api.js';
export {
  AppRole,
  type AuthUser,
  type KeycloakTokenClaims,
  type TokenPair,
  type OidcDiscovery,
  type AuthConfig,
} from './types/auth.js';

export type User = {
  id: string;
  email: string;
  displayName: string;
  createdAt: string;
  updatedAt: string;
};

export type HealthCheck = {
  status: 'ok' | 'error';
  version: string;
  timestamp: string;
};
