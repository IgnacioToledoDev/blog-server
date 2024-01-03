import { Image } from "../interface/picture.inteface";
import { User } from "../interface/user.interface";
import { Image } from "../interface/picture.inteface";
import { Tag } from "../interface/tag.interface";
import { Post } from "../interface/post.interface";

export type PostgressDatabase = string;
export type PostgressHost = string;
export type PostgressUsername = string;
export type PostgressPassword = string;
export type PostgressPort = number;
export type PostgressSsl = boolean;
export type role = "admin" | "user";
export type UserInput = Omit<User, "id" | "post">;
export type TagInput = Omit<Tag, "id" | "tag">;
export type PostInput = Omit<Post, "id" | "image">;
export type ImageInput = Omit<Image, "id" | "postId">;
