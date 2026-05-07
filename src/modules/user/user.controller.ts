import { NextFunction, Request, Response } from 'express';
import * as userService from './user.service';

export async function getUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
}

export async function getProfile(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user) {
      throw { status: 401, message: 'Unauthorized' };
    }

    const user = await userService.getUserByEmail(req.user.email);

    if (!user) {
      throw { status: 404, message: 'User not found' };
    }

    const { password, ...profile } = user;
    res.json(profile);
  } catch (error) {
    next(error);
  }
}
