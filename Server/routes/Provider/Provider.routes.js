import { Router } from "express";
import { createProvider } from "../../controller/Provider/Proveerdor.controller.js";

export const router = Router();

router.post("/Registrate/Proveedor", createProvider);
