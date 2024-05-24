import { Router } from "express";
import {createItinerary,ShowItinerary} from '../../../controller/Package/Itinerary/Itinerary.controller.js'

export const router = Router();

router.post('/Msg/Itinerario',createItinerary)
router.get("/Msg/Turista/Itinerario", ShowItinerary);
