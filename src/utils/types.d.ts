import { User } from "../interface/user.interface";

export type PostgressDatabase = string;
export type PostgressHost = string;
export type PostgressUsername = string;
export type PostgressPassword = string;
export type PostgressPort = number;
export type PostgressSsl = boolean;
export type role = "admin" | "user";
export type UserInput = Omit<User, "id" | "post">;
export type TagInput = Omit<Tag, "id" | "tag">;
