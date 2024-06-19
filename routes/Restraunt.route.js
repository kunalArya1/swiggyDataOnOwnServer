import { Router } from "express";
import {
  restrauntMenu,
  RestrauntMenuDetails,
  RestutantItem,
  headerItem,
  serverHealth,
} from "../controllers/Restraunt.Controllers.js";

const router = Router();

router.route("/").get(serverHealth);
router.route("/api/headerItem").get(headerItem);
router.route("/api/resItem").get(RestutantItem);
router.route("/api/resMenu").get(restrauntMenu);
router.route("/api/resMenu/:resid").get(RestrauntMenuDetails);

export default router;
