import { Router } from "express";
import ctrlWrapper from "../utils/ctrlWrapper.js";
import { deleteWater, getWaterPerDayInfo, getWaterPerMonthInfo, patchWater, postWater } from "../controllers/water.js";
import validateBody from "../middleware/validateBody.js";
import { WaterNotes, WaterPatchNotes } from "../validation/water.js";
import { authenticate } from "../middleware/authenticate.js";

const waterRouters = Router();
waterRouters.use(authenticate)
waterRouters.post("/",validateBody(WaterNotes) , ctrlWrapper(postWater) );
waterRouters.patch("/:waterId", validateBody(WaterPatchNotes), ctrlWrapper(patchWater));
waterRouters.delete("/:waterId", ctrlWrapper(deleteWater));
waterRouters.get("/perDay", ctrlWrapper(getWaterPerDayInfo));
waterRouters.get("/perMonth", ctrlWrapper(getWaterPerMonthInfo));

export default waterRouters;