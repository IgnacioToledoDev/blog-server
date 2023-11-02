import { Router } from "express";
import {
  postPostCtrl,
  deletePostCtrl,
  getPostCtrl,
  getPostsCtrl,
  updatePostCtrl,
} from "../controllers/post.ctrl";

const router = Router();

router.get("/", getPostsCtrl);

router.get("/:id", getPostCtrl);

router.post("/", postPostCtrl);

router.put("/:id", updatePostCtrl);

router.delete("/:id", deletePostCtrl);

export { router };
