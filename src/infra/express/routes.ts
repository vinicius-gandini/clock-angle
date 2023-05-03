import { Router } from 'express';
import { apiRouter } from './routes/clock';


const router = Router();
router.use('/v1/rest/', apiRouter);
export default router;
