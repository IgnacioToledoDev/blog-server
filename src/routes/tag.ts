import { Router } from "express";
import {
  deleteTagCtrl,
  postTagCtrl,
  updateTagCtrl,
  getTagCtrl,
  getTagsCtrl,
} from "../controllers/tag.ctrl";
import { checkJwtUser } from "../middlewares/session";

const router = Router();

router.get("/", checkJwtUser, getTagsCtrl);

router.get("/:id", checkJwtUser, getTagCtrl);

router.post("/", checkJwtUser, postTagCtrl);

router.put("/:id", checkJwtUser, updateTagCtrl);

router.delete("/:id", checkJwtUser, deleteTagCtrl);

export { router };
