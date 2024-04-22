import { Router } from "express";
export const router = Router();
import {typeUser} from '../controller/typeUser.controller.js'

router.post('/Registrate/typeUser',typeUser)
