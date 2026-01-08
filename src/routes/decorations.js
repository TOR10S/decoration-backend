import { Router } from "express";
import { createDecorationController, deleteDecorationController, getDecorationsController, patchDecorationController, upsertDecorationController } from "../controllers/decorations.js";
import { controllerWrapper } from "../utils/controllerWraper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createDecorationSchema, updateDecorationSchema } from "../validation/decorations.js";
import { isValidDecorationId } from "../middlewares/isValidDecorationId.js";
const router = Router();

router.get('/decorations', controllerWrapper(getDecorationsController));
router.post("/decorations",validateBody(createDecorationSchema) ,controllerWrapper(createDecorationController));
router.delete("/decorations/:decorationId",isValidDecorationId, controllerWrapper(deleteDecorationController));
router.put("/decorations/:decorationId",isValidDecorationId,validateBody(updateDecorationSchema) ,controllerWrapper(upsertDecorationController));
router.patch("/decorations/:decorationId",isValidDecorationId,validateBody(updateDecorationSchema) ,controllerWrapper(patchDecorationController));
export default router;
