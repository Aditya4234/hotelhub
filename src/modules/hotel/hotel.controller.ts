import { NextFunction, Request, Response } from 'express';
import * as hotelService from './hotel.service';

export async function getHotels(req: Request, res: Response, next: NextFunction) {
  try {
    const list = await hotelService.getAllHotels();
    res.json(list);
  } catch (error) {
    next(error);
  }
}

export async function getHotel(req: Request, res: Response, next: NextFunction) {
  try {
    const hotelId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const hotel = await hotelService.getHotelById(hotelId || '');

    if (!hotel) {
      throw { status: 404, message: 'Hotel not found' };
    }

    res.json(hotel);
  } catch (error) {
    next(error);
  }
}
