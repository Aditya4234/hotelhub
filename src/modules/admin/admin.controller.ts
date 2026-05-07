import { NextFunction, Request, Response } from 'express';
import { getAdminStats } from './admin.service';

export async function getStats(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user || req.user.role !== 'admin') {
      throw { status: 403, message: 'Admin access required' };
    }

    const stats = await getAdminStats();
    res.json(stats);
  } catch (error) {
    next(error);
  }
}
