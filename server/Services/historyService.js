import History from "../models/History.js";

export const saveHistory = async (
  userId,
  type,
  title,
  content
) => {
  return await History.create({
    user: userId,
    type,
    title,
    content,
  });
};

export const getHistory = async (userId) => {
  return await History.find({
    user: userId,
  }).sort({
    createdAt: -1,
  });
};

export const deleteHistory = async (id) => {
  return await History.findByIdAndDelete(id);
};