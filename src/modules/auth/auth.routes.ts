import { Router } from 'express';
import { login, register, getCurrentUser, logout } from './auth.controller';
import { validateLogin, validateRegister } from './auth.validation';
import { authMiddleware } from '../../middleware/auth.middleware';

const router = Router();

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);
router.get('/me', authMiddleware, getCurrentUser);
router.post('/logout', logout);

export default router;
