import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  const adminPasswordHash = await bcrypt.hash('Admin@123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@hotel.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@hotel.com',
      password: adminPasswordHash,
      role: 'admin',
    },
  });
  console.log('Created admin user:', admin.id);

  const hotels = [
    {
      name: 'Lakeview Resort',
      city: 'Rishikesh',
      address: '12 Lake Path, Rishikesh, Uttarakhand',
      rooms: 42,
      pricePerNight: 4500,
      rating: 4.7,
      image: '/hotels/lakeview.jpg',
    },
    {
      name: 'Royal Palace Hotel',
      city: 'Jaipur',
      address: '8 Landmark Road, Jaipur, Rajasthan',
      rooms: 80,
      pricePerNight: 5200,
      rating: 4.5,
      image: '/hotels/royal-palace.jpg',
    },
    {
      name: 'Sea Breeze Hotel',
      city: 'Goa',
      address: '22 Ocean Avenue, Calangute, Goa',
      rooms: 65,
      pricePerNight: 4800,
      rating: 4.6,
      image: '/hotels/seabreeze.jpg',
    },
  ];

  for (const hotelData of hotels) {
    const hotel = await prisma.hotel.upsert({
      where: { name: hotelData.name },
      update: {},
      create: hotelData,
    });
    console.log('Created hotel:', hotel.name, hotel.id);
  }

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
