import { Image } from "./picture.inteface";

export interface Post {
  id: number;
  title: string;
  content?: string;
  image?: Image[];
  userId: number;
}
