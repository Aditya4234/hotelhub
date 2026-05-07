import { NextFunction, Request, Response } from 'express';
import * as bookingService from './booking.service';

export async function getBookings(req: Request, res: Response, next: NextFunction) {
  try {
    const list = await bookingService.getAllBookings();
    res.json(list);
  } catch (error) {
    next(error);
  }
}

export async function createBooking(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user) {
      throw { status: 401, message: 'Unauthorized' };
    }

    const roomId = req.body.roomId;
    const startDate = new Date(req.body.startDate);
    const endDate = new Date(req.body.endDate);
    const nights = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    
    // Get room price
    const room = await (await import('../../models/room.model.js')).Room.findById(roomId);
    if (!room) {
      throw { status: 404, message: 'Room not found' };
    }
    
    const totalPrice = room.price * nights;

    const booking = await bookingService.createBooking({
      userId: req.user.userId,
      hotelId: req.body.hotelId,
      roomId: roomId,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      guests: Number(req.body.guests) || 1,
      totalPrice,
    });

    res.status(201).json(booking);
  } catch (error) {
    next(error);
  }
}
