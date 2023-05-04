import { Router } from 'express';


import { CalcAngleController } from '@/application/controllers/angles/calc-angle';
import { expressRouteAdapter } from '../route-adapter';
import { validateClockParams } from '../middlewares';

const apiRouter = Router();

const calcAngleController = new CalcAngleController();

apiRouter.get('/clock/:hour/:minute?', validateClockParams, expressRouteAdapter(calcAngleController));

export { apiRouter };
