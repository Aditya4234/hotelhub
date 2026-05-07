export interface Room {
  id: string;
  hotelId: string;
  name: string;
  type: string;
  capacity: number;
  price: number;
  available: boolean;
}

export const rooms: Room[] = [
  {
    id: 'r1',
    hotelId: 'h1',
    name: 'Deluxe Suite',
    type: 'Suite',
    capacity: 3,
    price: 8800,
    available: true,
  },
  {
    id: 'r2',
    hotelId: 'h1',
    name: 'Standard Room',
    type: 'Standard',
    capacity: 2,
    price: 3800,
    available: true,
  },
  {
    id: 'r3',
    hotelId: 'h2',
    name: 'Royal Suite',
    type: 'Suite',
    capacity: 4,
    price: 12000,
    available: true,
  },
  {
    id: 'r4',
    hotelId: 'h3',
    name: 'Ocean View Room',
    type: 'Premium',
    capacity: 2,
    price: 7600,
    available: true,
  },
];
