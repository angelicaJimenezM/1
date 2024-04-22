import {Router} from 'express';
import {login} from '../controller/login.controller.js'
export const router = Router();

router.post('/Iniciar-sesion',login)