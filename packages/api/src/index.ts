import { createApp } from "./app.js";
import { config } from "./config.js";
import { logger } from "./logger.js";

const app = createApp();

app.listen(config.port, config.host, () => {
  logger.info(
    { port: config.port, host: config.host, env: config.nodeEnv },
    `Mealodic API listening on http://${config.host}:${config.port}`,
  );
  logger.info(`API docs available at http://${config.host}:${config.port}/api/docs`);
});
