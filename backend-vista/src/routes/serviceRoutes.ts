import { Router } from "express";
import { createService, getServiceById } from "../controllers/serviceController";

const router = Router();
router.post("/", createService);
router.get("/:id", getServiceById);

export default router;