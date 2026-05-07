import { User } from '../../models/user.model';

export async function getAllUsers() {
  return User.find().select('-password').sort({ createdAt: -1 });
}

export async function getUserByEmail(email: string) {
  return User.findOne({ email }).select('-password');
}

export async function getUserById(id: string) {
  return User.findById(id).select('-password');
}
