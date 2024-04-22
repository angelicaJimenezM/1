import {Router} from 'express';
import {createGuide} from '../controller/guide.controller.js'

export const router = Router();

router.post('/Registrate/typeUser/Guia',createGuide);

