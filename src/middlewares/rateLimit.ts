import { rateLimit } from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  max: 100,
  legacyHeaders: false,
  message: "Too many requests from this IP, please try again in 15 minutes",
});

export default limiter;
