import { Router } from 'express';
import { authMiddleware } from '../../middleware/auth.middleware';
import { getStats } from './admin.controller';

const router = Router();

router.get('/stats', authMiddleware, getStats);

export default router;
