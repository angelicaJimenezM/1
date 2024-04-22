import {Router} from 'express';
import {createUser} from '../controller/user.controller.js'

export const router = Router();

router.post('/Registrate',createUser)