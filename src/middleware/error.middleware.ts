import { NextFunction, Request, Response } from 'express';

export function errorMiddleware(error: any, req: Request, res: Response, next: NextFunction) {
  const status = error?.status ?? 500;
  const message = error?.message ?? 'Internal server error';

  console.error('[ERROR]', message, error?.stack ?? '');
  res.status(status).json({ message });
}
