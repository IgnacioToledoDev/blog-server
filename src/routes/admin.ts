import { Router } from "express";
import { checkJwtUser } from "../middlewares/session";

const router = Router();

router.get("/auth", (req, res) => {
  res.send("Hello from admin router!");
});

router.get("/dashboard", checkJwtUser, (req, res) => {
  res.send("Hello from admin router!");
});

router.post("/post", checkJwtUser, (req, res) => {
  res.send("Hello from admin router!");
});

export { router };
