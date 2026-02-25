import { createApp } from "./app.js";
import { config } from "./config.js";
import { logger } from "./logger.js";
import { KeycloakClient } from "./lib/keycloak.js";
import { createAuthRouter } from "./routes/auth.js";

const keycloak = new KeycloakClient({
  baseUrl: config.keycloak.baseUrl,
  realm: config.keycloak.realm,
  clientId: config.keycloak.clientId,
  clientSecret: config.keycloak.clientSecret,
});

const app = createApp();

app.use("/api/v1/auth", createAuthRouter(keycloak));

app.listen(config.port, config.host, () => {
  logger.info(
    { port: config.port, host: config.host, env: config.nodeEnv },
    `Mealodic API listening on http://${config.host}:${config.port}`,
  );
  logger.info(`API docs available at http://${config.host}:${config.port}/api/docs`);
  logger.info(
    `Keycloak: ${config.keycloak.baseUrl}/realms/${config.keycloak.realm}`,
  );
});

export { app, keycloak };
