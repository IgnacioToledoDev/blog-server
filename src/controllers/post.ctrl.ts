import { Request, Response } from "express";
import { message } from "../utils/utils";
import {
  deletePostSrv,
  getPostSrv,
  getPostsSrv,
  postNewPostSrv,
  updatePostSrv,
} from "../services/post.srv";
import { ImageInput } from "../utils/types";

const getPostCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const post = await getPostSrv(parseInt(id));
    res.send(post);
  } catch (err) {
    message.concat(`${err}`);
  }
};

const postPostCtrl = async (req: Request, { body }: Request, res: Response) => {
  try {
    const filename = req.file?.filename;
    const path = req.file?.path;
    const newImage: ImageInput = { filename: filename, path: path };
    console.log("controlador", body);
    const post = await postNewPostSrv(body, newImage);
    res.send(post);
  } catch (err) {
    message.concat(`${err}`);
  }
};

const getPostsCtrl = async (req: Request, res: Response) => {
  try {
    const posts = await getPostsSrv();
    res.send(posts);
  } catch (err) {
    message.concat(`${err}`);
  }
};

const updatePostCtrl = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const post = await updatePostSrv(id, body);
    res.send(post);
  } catch (err) {
    message.concat(`${err}`);
  }
};

const deletePostCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    await deletePostSrv(id);
    res.status(201).send("Post deleted");
  } catch (err) {
    message.concat(`${err}`);
  }
};

export {
  getPostCtrl,
  postPostCtrl,
  getPostsCtrl,
  updatePostCtrl,
  deletePostCtrl,
};
