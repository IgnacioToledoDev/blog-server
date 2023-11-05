import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

const generateToken = (payload: string) => {
  const jwt = sign(payload, JWT_SECRET);
  return jwt;
};

const verifyToken = (token: string) => {
  const isOk = verify(token, JWT_SECRET);
  return isOk;
};

export { generateToken, verifyToken };
