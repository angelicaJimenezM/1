import { Router } from "express";
import {
  createPackage,
  showPackage
} from "../../controller/Package/Package.controller.js";
export const router = Router();

router.post("/Msg/TouristPlan", createPackage);

router.get("/Msg/planes", showPackage);
