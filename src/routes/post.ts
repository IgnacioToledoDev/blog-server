import { Router } from "express";
import {
  postPostCtrl,
  deletePostCtrl,
  getPostCtrl,
  getPostsCtrl,
  updatePostCtrl,
} from "../controllers/post.ctrl";
import { checkJwtUser } from "../middlewares/session";

const router = Router();

router.get("/", getPostsCtrl);

router.get("/:id", getPostCtrl);

router.post("/", checkJwtUser, postPostCtrl);

router.put("/:id", checkJwtUser, updatePostCtrl);

router.delete("/:id", checkJwtUser, deletePostCtrl);

export { router };
