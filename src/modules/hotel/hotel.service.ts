import { Hotel } from '../../models/hotel.model';

export async function getAllHotels() {
  return Hotel.find().sort({ createdAt: -1 });
}

export async function getHotelById(id: string) {
  return Hotel.findById(id);
}
