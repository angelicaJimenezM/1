import express from 'express';
import {login} from '../../controller/auth/login.controller.js';

export const router = express.Router();

router.post('/Iniciar-sesion',login);


