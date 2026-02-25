import type { Response } from "express";
import type { ApiResponse, PaginationMeta, ApiError, ErrorCode } from "@mealodic/shared";
import { HTTP_STATUS } from "@mealodic/shared";

export function sendSuccess<T>(
  res: Response,
  data: T,
  meta?: PaginationMeta,
  statusCode = 200,
): void {
  const body: ApiResponse<T> = { data };
  if (meta) body.meta = meta;
  res.status(statusCode).json(body);
}

export function sendError(
  res: Response,
  code: ErrorCode,
  message: string,
  details?: Record<string, unknown>,
): void {
  const error: ApiError = { code, message };
  if (details) error.details = details;

  const body: ApiResponse = { error };
  res.status(HTTP_STATUS[code]).json(body);
}
