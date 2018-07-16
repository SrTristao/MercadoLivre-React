import * as express from 'express';

import { search } from './actions';

export const router = express.Router();

router.get('/:search', search);