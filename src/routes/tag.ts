import { Router } from "express";
import {
  deleteTagCtrl,
  postTagCtrl,
  updateTagCtrl,
  getTagCtrl,
  getTagsCtrl,
} from "../controllers/tag.ctrl";

const router = Router();

router.get("/", getTagsCtrl);

router.get("/:id", getTagCtrl);

router.post("/", postTagCtrl);

router.put("/:id", updateTagCtrl);

router.delete("/:id", deleteTagCtrl);

export { router };
