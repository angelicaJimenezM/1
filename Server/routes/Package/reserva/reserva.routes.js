import { Router } from "express";
import {createItinerary,GetData} from "../../../controller/Package/reservas/reserva.controller.js";
export const router = Router();

router.post("/Msg/Turista/Itinerario/Form", createItinerary);
router.get("/Msg/Turista/reservas", GetData);
router.get("/Msg/Guia/reservas", GetData);


