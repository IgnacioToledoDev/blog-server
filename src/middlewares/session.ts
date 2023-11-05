import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/handleJWT";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwtByUSer = req.headers.authorization || "";
    const jwt = jwtByUSer?.split(" ").pop();
    const verify = verifyToken(jwt as string);
    if (!verify) res.send("No valid token").status(401);
    next();
  } catch (error) {
    res.send("No valid token").status(401);
  }
};

export { checkJwt };
