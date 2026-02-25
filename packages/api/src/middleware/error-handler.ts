import type { Request, Response, NextFunction } from "express";
import { AppError } from "../helpers/errors.js";
import { sendError } from "../helpers/response.js";
import { logger } from "../logger.js";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (err instanceof AppError) {
    sendError(res, err.code, err.message, err.details);
    return;
  }

  logger.error({ err }, "Unhandled error");
  sendError(res, "INTERNAL_ERROR", "An unexpected error occurred");
}
