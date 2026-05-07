import { Router } from 'express';
import { authMiddleware } from '../../middleware/auth.middleware';
import { createBooking, getBookings } from './booking.controller';

const router = Router();

router.get('/', authMiddleware, getBookings);
router.post('/', authMiddleware, createBooking);

export default router;
