import { Booking } from '../../models/booking.model';

export async function getAllBookings() {
  return Booking.find()
    .populate('userId', 'name email')
    .populate('hotelId', 'name city')
    .populate('roomId', 'name type')
    .sort({ createdAt: -1 });
}

export async function createBooking(payload: {
  userId: string;
  hotelId: string;
  roomId: string;
  startDate: string;
  endDate: string;
  guests: number;
  totalPrice: number;
}) {
  const booking = await Booking.create({
    userId: payload.userId,
    hotelId: payload.hotelId,
    roomId: payload.roomId,
    startDate: new Date(payload.startDate),
    endDate: new Date(payload.endDate),
    guests: payload.guests,
    totalPrice: payload.totalPrice,
    status: 'confirmed',
  });

  return booking.populate(['userId', 'hotelId', 'roomId']);
}
