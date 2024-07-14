import { Router } from 'express';
import { ping } from '../controllers/main.controller';
const router = Router();

router.get('/', ping);

export default router;
