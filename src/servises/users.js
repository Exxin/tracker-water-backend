import { UsersCollection } from "../db/models/users.js";

export const updateUser = async (payload) => {
  console.log(payload);
  const updateData = { ...payload.user };
  const updateUser = await UsersCollection.findOneAndUpdate(
    { _id: payload.userId },
    updateData,
    { new: true }
  );

  return {
    user: updateUser,
    isNew: Boolean(updateUser?.lastErrorObject?.upserted),
  };
};

export async function getUserById(userIdParam) {
  const userById = await UsersCollection.findOne({ _id: userIdParam });
  return userById;
}
