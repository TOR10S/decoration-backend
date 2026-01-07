import { Router } from "express";
import { createDecorationController, deleteDecorationController, getDecorationsController, patchDecorationController, upsertDecorationController } from "../controllers/decorations.js";
import { controllerWrapper } from "../utils/controllerWraper.js";
const router = Router();

router.get('/decorations', controllerWrapper(getDecorationsController));
router.post("/decorations", controllerWrapper(createDecorationController));
router.delete("/decorations/:decorationId", controllerWrapper(deleteDecorationController));
router.put("/decorations/:decorationId", controllerWrapper(upsertDecorationController));
router.patch("/decorations/:decorationId", controllerWrapper(patchDecorationController));
export default router;
