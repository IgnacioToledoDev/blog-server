import { Router } from "express";
import { checkJwtUser } from "../middlewares/session";

const router = Router();

router.get("/auth", (req, res) => {
  res.send("Hello from admin router!");
});

router.get("/dashboard", (req, res) => {
  res.send("Hello from admin router!");
});

router.post("/post", (req, res) => {
  res.send("Hello from admin router!");
});

export { router };
