import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/handleJWT";

const checkJwtUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser?.split(" ").pop();
    const verify = verifyToken(jwt as string);
    if (!verify) res.send("No valid token").status(401);
    next();
  } catch (error) {
    res.send("No valid token").status(401);
  }
};

export { checkJwtUser };
