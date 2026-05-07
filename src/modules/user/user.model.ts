import bcrypt from 'bcryptjs';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}

const adminPasswordHash = bcrypt.hashSync('Admin@123', 10);

export const users: User[] = [
  {
    id: 'u1',
    name: 'Admin User',
    email: 'admin@hotel.com',
    password: adminPasswordHash,
    role: 'admin',
  },
];
