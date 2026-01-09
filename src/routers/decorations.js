import { Router } from "express";
import { createDecorationController, deleteDecorationController, getDecorationsController, patchDecorationController, upsertDecorationController } from "../controllers/decorations.js";
import { controllerWrapper } from "../utils/controllerWraper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createDecorationSchema, updateDecorationSchema } from "../validation/decorations.js";
import { isValidDecorationId } from "../middlewares/isValidDecorationId.js";
const router = Router();

router.get('/', controllerWrapper(getDecorationsController));
router.post("/",validateBody(createDecorationSchema) ,controllerWrapper(createDecorationController));
router.delete("/:decorationId",isValidDecorationId, controllerWrapper(deleteDecorationController));
router.put("/:decorationId",isValidDecorationId,validateBody(updateDecorationSchema) ,controllerWrapper(upsertDecorationController));
router.patch("/:decorationId",isValidDecorationId,validateBody(updateDecorationSchema) ,controllerWrapper(patchDecorationController));
export default router;
