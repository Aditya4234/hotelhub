import { Router } from 'express';
import { authMiddleware } from '../../middleware/auth.middleware';
import { getProfile, getUsers } from './user.controller';

const router = Router();

router.get('/', authMiddleware, getUsers);
router.get('/profile', authMiddleware, getProfile);

export default router;
