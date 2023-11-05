import { Router } from "express";
import {
  postUserCtrl,
  getUserCtrl,
  getUsersCtrl,
  updateUserCtrl,
  deleteUserCtrl,
} from "../controllers/user.ctrl";
import { checkJwtUser } from "../middlewares/session";

const router = Router();

router.get("/", getUsersCtrl);

router.post("/", postUserCtrl);

router.get("/:id", getUserCtrl);

router.put("/:id", checkJwtUser, updateUserCtrl);

router.delete("/:id", checkJwtUser, deleteUserCtrl);

export { router };
