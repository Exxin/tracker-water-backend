import express from "express";
import { Router } from "express";

import ctrlWrapper from "../utils/ctrlWrapper.js";
import validateBody from "../middleware/validateBody.js";

import { authenticate } from "../middleware/authenticate.js";
import { upload } from "../middleware/multer.js";
import { isValidId } from "../middleware/isValidId.js";

import { userSchema } from "../validation/user.js";
import {
  patchUserController,
  getUserByIdController,
} from "../controllers/users.js";

const router = Router();
const jsonParser = express.json();

router.use(authenticate);

router.patch(
  "/avatarUser",
  jsonParser,
  validateBody(userSchema),
  upload.single("photo"),
  ctrlWrapper(patchUserController)
);

router.get("/:userIdParam", isValidId, ctrlWrapper(getUserByIdController));

export default router;
