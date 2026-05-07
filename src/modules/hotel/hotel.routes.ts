import { Router } from 'express';
import { getHotel, getHotels } from './hotel.controller';

const router = Router();

router.get('/', getHotels);
router.get('/:id', getHotel);

export default router;
