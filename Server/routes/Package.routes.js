import { Router } from "express";
import {createPackage} from '../controller/Package.controller.js'
export const router = Router();

router.post('/Msg/TouristPlan',createPackage)