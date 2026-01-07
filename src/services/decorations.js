import { DecorationsCollection } from '../db/models/decoration.js';

export const getAllDecorations = async () => {
  const decorations = await DecorationsCollection.find();
  return decorations;
};

export const createDecoration = async (payload) => {
  const decoration = await DecorationsCollection.create(payload);
  return decoration;
};

export const deleteDecoration = async (decorationId) => {
  const decoration = await DecorationsCollection.findOneAndDelete({
    _id: decorationId,
  });
  return decoration;
};

export const updateDecoration = async (decorationId, payload, options = {}) => {
  const rawResult = await DecorationsCollection.findOneAndUpdate(
    {_id: decorationId},
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    }
  );
  if (!rawResult || !rawResult.value) return null;

  return {
    decoration: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
