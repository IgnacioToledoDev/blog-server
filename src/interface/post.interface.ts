import { Image } from "./picture.inteface";
import { Tag } from "./tag.interface";

export interface Post {
  id: number;
  title: string;
  content?: string;
  image?: Image[];
  userId: number;
  id_tag?: Tag[];
}
