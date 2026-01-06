import { DecorationsCollection } from '../db/models/decoration.js';

export const getAllDecorations = async () => {
  const decorations = await DecorationsCollection.find();
  return decorations;
};
