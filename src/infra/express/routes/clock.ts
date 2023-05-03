import { Router } from 'express';


import { CalcAngleController } from '@/application/controllers/angles/calc-angle';
import { expressRouteAdapter } from '../route-adapter';

const apiRouter = Router();

const calcAngleController = new CalcAngleController();

apiRouter.get('/clock/:hour/:minute?', expressRouteAdapter(calcAngleController));

export { apiRouter };
