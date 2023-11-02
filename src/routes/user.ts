//change ctrl files to admin.ts

import { Router } from "express";
import {
  postUserCtrl,
  getUserCtrl,
  getUsersCtrl,
  updateUserCtrl,
  deleteUserCtrl,
} from "../controllers/user.ctrl";

const router = Router();

router.get("/", getUsersCtrl);

router.post("/", postUserCtrl);

router.get("/:id", getUserCtrl);

router.put("/:id", updateUserCtrl);

router.delete("/:id", deleteUserCtrl);

export { router };
