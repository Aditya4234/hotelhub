import { Router } from 'express';
import { authMiddleware } from '../../middleware/auth.middleware';
import { createPayment, getPayments } from './payment.controller';

const router = Router();

router.get('/', authMiddleware, getPayments);
router.post('/', authMiddleware, createPayment);

export default router;
