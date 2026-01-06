import { Router } from "express";
import { getDecorationsController } from "../controllers/decorations.js";
import { controllerWrapper } from "../utils/controllerWraper.js";
const router = Router();

router.get('/decorations', controllerWrapper(getDecorationsController));

export default router;
