import { Request, Response } from "express";
import { message } from "../utils/utils";
import {
  deleteTagSrv,
  getTagSrv,
  getTagsSrv,
  postNewTagSrv,
  updateTagSrv,
} from "../services/tag.srv";

const getTagCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const tag = await getTagSrv(parseInt(id));
    res.send(tag);
  } catch (err) {
    message.concat(`${err}`);
  }
};

const postTagCtrl = async ({ body }: Request, res: Response) => {
  try {
    const tag = await postNewTagSrv(body);
    res.send(tag);
  } catch (err) {
    message.concat(`${err}`);
  }
};

const getTagsCtrl = async (req: Request, res: Response) => {
  try {
    const tags = await getTagsSrv();
    res.send(tags);
  } catch (err) {
    message.concat(`${err}`);
  }
};

const updateTagCtrl = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const tag = await updateTagSrv(id, body);
    res.send(tag);
  } catch (err) {
    message.concat(`${err}`);
  }
};

const deleteTagCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const tag = await deleteTagSrv(id);
    res.status(201).send("Tag deleted");
  } catch (err) {
    message.concat(`${err}`);
  }
};

export { getTagCtrl, postTagCtrl, getTagsCtrl, updateTagCtrl, deleteTagCtrl };
