export interface Booking {
  id: string;
  userId: string;
  hotelId: string;
  roomId: string;
  startDate: string;
  endDate: string;
  guests: number;
  totalPrice: number;
  status: 'confirmed' | 'cancelled';
}

export const bookings: Booking[] = [];
