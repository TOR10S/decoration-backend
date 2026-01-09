import { Router } from 'express';
import decorationsRouter from './decorations.js';

const router = Router();

router.use('/decorations', decorationsRouter);

export default router;
