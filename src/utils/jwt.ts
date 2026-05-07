import jwt from 'jsonwebtoken';
import { JwtPayload } from '../types';

const SECRET_KEY = process.env.SECRET_KEY ?? 'hotel_secret_key';

export function signToken(payload: JwtPayload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET_KEY) as JwtPayload;
}
