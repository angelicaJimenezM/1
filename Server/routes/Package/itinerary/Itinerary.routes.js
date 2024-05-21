import { Router } from "express";
import {createItinerary} from '../../../controller/Package/itinerary/Itinerary.controller.js'

export const router = Router();

router.post('/Msg/Itinerario',createItinerary)