import { Router } from "express";
import {
  createPackage,
  showPackage,
  getPaqueteTuristicoById,
  updatePackage
} from "../../controller/Package/Package.controller.js";
export const router = Router();

router.post("/Msg/Guia/TouristPlan", createPackage);
router.get("/Msg/Guia/TouristPlan/:id", getPaqueteTuristicoById);
router.get("/Msg/Guia/planes", showPackage);
router.put("/Msg/Guia/TouristPlan/:id",updatePackage);

