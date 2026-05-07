import { Router } from 'express';
import { getRoom, getRooms } from './room.controller';

const router = Router();

router.get('/', getRooms);
router.get('/:id', getRoom);

export default router;
