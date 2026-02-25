/**
 * Standard API response envelope used across all endpoints.
 *
 * Success: `{ data: T, meta?: PaginationMeta }`
 * Error:   `{ error: ApiError }`
 */
export interface ApiResponse<T = unknown> {
  data?: T;
  error?: ApiError;
  meta?: PaginationMeta;
}

export interface ApiError {
  code: ErrorCode;
  message: string;
  details?: Record<string, unknown>;
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export type ErrorCode =
  | "BAD_REQUEST"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "CONFLICT"
  | "VALIDATION_ERROR"
  | "RATE_LIMIT_EXCEEDED"
  | "INTERNAL_ERROR"
  | "SERVICE_UNAVAILABLE";

export const HTTP_STATUS: Record<ErrorCode, number> = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  VALIDATION_ERROR: 422,
  RATE_LIMIT_EXCEEDED: 429,
  INTERNAL_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};
