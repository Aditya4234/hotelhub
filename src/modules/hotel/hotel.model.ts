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

export const hotels: Hotel[] = [
  {
    id: 'h1',
    name: 'Lakeview Resort',
    city: 'Rishikesh',
    address: '12 Lake Path, Rishikesh, Uttarakhand',
    rooms: 42,
    pricePerNight: 4500,
    rating: 4.7,
    image: '/hotels/lakeview.jpg',
  },
  {
    id: 'h2',
    name: 'Royal Palace Hotel',
    city: 'Jaipur',
    address: '8 Landmark Road, Jaipur, Rajasthan',
    rooms: 80,
    pricePerNight: 5200,
    rating: 4.5,
    image: '/hotels/royal-palace.jpg',
  },
  {
    id: 'h3',
    name: 'Sea Breeze Hotel',
    city: 'Goa',
    address: '22 Ocean Avenue, Calangute, Goa',
    rooms: 65,
    pricePerNight: 4800,
    rating: 4.6,
    image: '/hotels/seabreeze.jpg',
  },
];
