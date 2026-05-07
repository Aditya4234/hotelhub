import { Room } from '../../models/room.model';

export async function getAllRooms() {
  return Room.find().populate('hotelId').sort({ createdAt: -1 });
}

export async function getRoomsByHotelId(hotelId: string) {
  return Room.find({ hotelId }).populate('hotelId').sort({ createdAt: -1 });
}

export async function getRoomById(roomId: string) {
  return Room.findById(roomId).populate('hotelId');
}
