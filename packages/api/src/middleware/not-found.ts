import type { Request, Response } from 'express';
import { sendError } from '../helpers/response.js';

export function notFoundHandler(_req: Request, res: Response): void {
  sendError(res, 'NOT_FOUND', 'The requested resource was not found');
}
