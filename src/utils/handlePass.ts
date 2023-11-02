import { hash, compare } from "bcryptjs";

const encrypt = async (pass: string) => {
  const passwordHash = hash(pass, 8);
  return passwordHash;
};

const verified = async (pass: string, hash: string) => {
  const passwordVerified = compare(pass, hash);
  return passwordVerified;
};

export { encrypt, verified };
