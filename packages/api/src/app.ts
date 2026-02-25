import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { requestLogger } from './middleware/request-logger.js';
import { errorHandler } from './middleware/error-handler.js';
import { notFoundHandler } from './middleware/not-found.js';
import { swaggerSpec } from './config/swagger.js';
import v1Router from './routes/v1/index.js';
import { config } from './config.js';

export function createApp(): express.Express {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(requestLogger);

  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/api/docs.json', (_req, res) => {
    res.json(swaggerSpec);
  });

  app.use(`/api/${config.apiVersion}`, v1Router);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
