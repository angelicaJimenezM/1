import { Router } from "express";
import { createGuide } from "../controller/Guide/guide.controller.js";

export const router = Router();

// Endpoint de registrar un guia
router.post("/Registrate/Guia", createGuide);
