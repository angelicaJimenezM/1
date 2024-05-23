import { Router } from "express";
import {
  createPackage,
  showPackage,
  getPaqueteTuristicoById,
  updatePackage
} from "../../controller/Package/Package.controller.js";
export const router = Router();

router.post("/Msg/TouristPlan", createPackage);
router.get("/Msg/TouristPlan/:id", getPaqueteTuristicoById);
router.get("/Msg/planes", showPackage);
router.put("/Msg/TouristPlan/:id",updatePackage)

