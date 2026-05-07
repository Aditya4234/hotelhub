export interface JwtPayload {
  userId: string;
  email: string;
  role: 'admin' | 'user';
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}

export interface Hotel {
  id: string;
  name: string;
  city: string;
  address: string;
  rooms: number;
  pricePerNight: number;
  rating: number;
  image: string;
}

export interface Room {
  id: string;
  hotelId: string;
  name: string;
  type: string;
  capacity: number;
  price: number;
  available: boolean;
}

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

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  currency: string;
  status: 'success' | 'failed';
  method: string;
  paidAt: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}
