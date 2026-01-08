import { DecorationsCollection } from '../db/models/decoration.js';
import { calculatePaginationData } from '../utils/calcPaginationData.js';
import { SORT_ORDER } from '../constants/index.js';


export const getAllDecorations = async ({ page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id', }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;
  const decorationsQuery = DecorationsCollection.find();
  const decorationsCount = await DecorationsCollection.find().merge(decorationsQuery).countDocuments();
  const decorations = await decorationsQuery.skip(skip).limit(limit).sort({ [sortBy]: sortOrder }).exec();
  const paginationData = calculatePaginationData(decorationsCount, perPage, page);

  return {
    data: decorations,
    ...paginationData,
  };;
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
