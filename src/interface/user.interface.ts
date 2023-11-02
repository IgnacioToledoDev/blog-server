import { role } from "../utils/types";
import { Post } from "./post.interface";

export interface User {
  id: number;
  name: string;
  lastName?: string;
  email: string;
  password: string;
  isAdmin: boolean;
  role: role;
  post: Post[];
}
