import * as express from 'express';
import { router as itemsRoutes } from './routes/Items/routes';
import { router as sitesRoutes } from './routes/Sites/routes';


export const router = express.Router();

router.use('/items', itemsRoutes);
router.use('/sites', sitesRoutes);