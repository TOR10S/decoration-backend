import { getAllDecorations } from "../services/decorations.js";

export const getDecorationsController = async (req, res,next) => {
    try {
        const decorations = await getAllDecorations();
  res.json({
    status: 200,
    message: "decorations acquired",
    data: decorations,
  });
    } catch (error) {
        next(error);
    }


};
