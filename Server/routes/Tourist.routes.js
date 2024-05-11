import {Router} from 'express';
import {createTourist} from '../controller/tourist.controller.js'

export const router = Router();

router.post('/Registrate/Turista',createTourist);
