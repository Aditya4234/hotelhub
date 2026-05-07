import { comparePassword } from '../../utils/hash';
import { signToken } from '../../utils/jwt';
import { User } from '../../models/user.model';

interface AuthCredentials {
  name?: string;
  email: string;
  password: string;
}

export async function register(credentials: AuthCredentials) {
  const email = credentials.email.toLowerCase();
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw { status: 400, message: 'Email already registered' };
  }

  if (!credentials.name) {
    throw { status: 400, message: 'Name is required' };
  }

  const newUser = await User.create({
    name: credentials.name,
    email,
    password: credentials.password,
    role: 'user',
  });

  const token = signToken({ userId: newUser._id.toString(), email: newUser.email, role: newUser.role as 'admin' | 'user' });

  return {
    user: {
      id: newUser._id.toString(),
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
    token,
  };
}

export async function login(credentials: AuthCredentials) {
  const email = credentials.email.toLowerCase();
  const user = await User.findOne({ email });

  if (!user) {
    throw { status: 401, message: 'Invalid credentials' };
  }

  const isValid = await comparePassword(credentials.password, user.password);

  if (!isValid) {
    throw { status: 401, message: 'Invalid credentials' };
  }

  const token = signToken({ userId: user._id.toString(), email: user.email, role: user.role as 'admin' | 'user' });

  return {
    user: {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token,
  };
}

export async function getCurrentUser(userId: string) {
  const user = await User.findById(userId);

  if (!user) {
    throw { status: 404, message: 'User not found' };
  }

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
  };
}
