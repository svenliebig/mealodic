function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function optional(name: string, fallback: string): string {
  return process.env[name] ?? fallback;
}

export const config = {
  port: Number(optional("PORT", "3000")),
  host: optional("HOST", "0.0.0.0"),
  nodeEnv: optional("NODE_ENV", "development"),
  logLevel: optional("LOG_LEVEL", "info"),
  apiVersion: "v1",

  keycloak: {
    baseUrl: required("KEYCLOAK_BASE_URL"),
    realm: optional("KEYCLOAK_REALM", "mealodic"),
    clientId: optional("KEYCLOAK_CLIENT_ID_API", "mealodic-api"),
    clientSecret: process.env["KEYCLOAK_CLIENT_SECRET_API"],
  },

  cors: {
    origin: optional("CORS_ORIGIN", "http://localhost:5173"),
  },
} as const;

export type Config = typeof config;
