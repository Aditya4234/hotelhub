import { Router } from 'express';
import { authMiddleware } from '../../middleware/auth.middleware';
import { getSummary } from './dashboard.controller';

const router = Router();

router.get('/', authMiddleware, getSummary);

export default router;
