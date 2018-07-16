import * as express from 'express';

import { itemsById } from './actions';

export const router = express.Router();

router.get('/:id', itemsById);