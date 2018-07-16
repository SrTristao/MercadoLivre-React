import { Router} from 'express';
import { router as endpoint } from './endpoint/routes';

export const router = Router();

router.use('/', endpoint);