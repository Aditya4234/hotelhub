import { NextFunction, Request, Response } from 'express';
import { getDashboardStats } from './dashboard.service';

export async function getSummary(req: Request, res: Response, next: NextFunction) {
  try {
    const summary = await getDashboardStats();
    res.json(summary);
  } catch (error) {
    next(error);
  }
}
