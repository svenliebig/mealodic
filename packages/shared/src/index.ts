export type ApiResponse<T> = {
  data: T;
  meta?: {
    page?: number;
    pageSize?: number;
    total?: number;
  };
};

export type ApiError = {
  statusCode: number;
  message: string;
  error?: string;
};

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
