import mongoose from 'mongoose';
import { Hotel, IHotel } from '../models/hotel.model';
import { Room, IRoom } from '../models/room.model';
import { User } from '../models/user.model';
import bcrypt from 'bcryptjs';

const DATABASE_URL = process.env.DATABASE_URL ?? 'mongodb+srv://adityagupta200807_db_user:A208Yq3AF8DSJEBU@cluster0.eqznvwj.mongodb.net/hotel_management?retryWrites=true&w=majority';

const seedData = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Hotel.deleteMany({});
    await Room.deleteMany({});
    await User.deleteMany({});
    console.log('Cleared existing data');

    // Seed Hotels
    const lakeviewResort = await Hotel.create({
      name: 'Lakeview Resort',
      city: 'Rishikesh',
      address: '12 Lake Path, Rishikesh, Uttarakhand',
      rooms: 42,
      pricePerNight: 4500,
      rating: 4.7,
      image: '/hotels/lakeview.jpg',
    });

    const royalPalace = await Hotel.create({
      name: 'Royal Palace Hotel',
      city: 'Jaipur',
      address: '8 Landmark Road, Jaipur, Rajasthan',
      rooms: 80,
      pricePerNight: 5200,
      rating: 4.5,
      image: '/hotels/royal-palace.jpg',
    });

    const seaBreeze = await Hotel.create({
      name: 'Sea Breeze Hotel',
      city: 'Goa',
      address: '22 Ocean Avenue, Calangute, Goa',
      rooms: 65,
      pricePerNight: 4800,
      rating: 4.6,
      image: '/hotels/seabreeze.jpg',
    });

    console.log('Hotels seeded');

    // Seed Rooms
    await Room.create([
      {
        hotelId: lakeviewResort._id,
        name: 'Deluxe Suite',
        type: 'Suite',
        capacity: 3,
        price: 8800,
        available: true,
      },
      {
        hotelId: lakeviewResort._id,
        name: 'Standard Room',
        type: 'Standard',
        capacity: 2,
        price: 3800,
        available: true,
      },
      {
        hotelId: royalPalace._id,
        name: 'Royal Suite',
        type: 'Suite',
        capacity: 4,
        price: 12000,
        available: true,
      },
      {
        hotelId: seaBreeze._id,
        name: 'Ocean View Room',
        type: 'Premium',
        capacity: 2,
        price: 7600,
        available: true,
      },
    ]);
    console.log('Rooms seeded');

    // Seed Admin User
    const adminPassword = await bcrypt.hash('Admin@123', 10);
    await User.create({
      name: 'Admin User',
      email: 'admin@hotel.com',
      password: adminPassword,
      role: 'admin',
    });
    console.log('Admin user seeded');

    console.log('Seed completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
};

seedData();
