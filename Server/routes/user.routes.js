import {Router} from 'express';
import {createUser,getUser} from '../controller/user.controller.js'

export const router = Router();

router.get('/Iniciar-sesion',getUser)
router.post('/Iniciar-sesion',createUser)