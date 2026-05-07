import { NextFunction, Request, Response } from 'express';
import * as roomService from './room.service';

export async function getRooms(req: Request, res: Response, next: NextFunction) {
  try {
    const hotelId = req.query.hotelId as string | undefined;
    const list = hotelId ? await roomService.getRoomsByHotelId(hotelId) : await roomService.getAllRooms();
    res.json(list);
  } catch (error) {
    next(error);
  }
}

export async function getRoom(req: Request, res: Response, next: NextFunction) {
  try {
    const roomId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const room = await roomService.getRoomById(roomId ?? '');

    if (!room) {
      throw { status: 404, message: 'Room not found' };
    }

    res.json(room);
  } catch (error) {
    next(error);
  }
}
