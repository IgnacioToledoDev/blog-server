// switch all content of this file to admin.ctrl.ts

import { Request, Response } from "express";
import { handleHttp } from "../utils/handleHttp";
import {
  postNewUseSrv,
  getUserSrv,
  getUsersSrv,
  updateUserSrv,
  deleteUserSrv,
} from "../services/user.srv";

import { message } from "../utils/utils";
import { generateToken } from "../utils/handleJWT";

const getUserCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const users = await getUserSrv(parseInt(id));
    res.send(users);
  } catch (err) {
    handleHttp(res, message.concat(`${err}`));
  }
};

const postUserCtrl = async ({ body }: Request, res: Response) => {
  try {
    const user = await postNewUseSrv(body);
    res.send(user);
  } catch (err) {
    handleHttp(res, message.concat(`${err}`));
  }
};

const getUsersCtrl = async (req: Request, res: Response) => {
  try {
    const user = await getUsersSrv();
    res.send(user).json();
  } catch (err) {
    handleHttp(res, message.concat(`${err}`));
  }
};

const updateUserCtrl = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const user = await updateUserSrv(id, body);
    console.log("User updated");
    res.send(user);
  } catch (err) {
    handleHttp(res, message.concat(`${err}`));
  }
};

const deleteUserCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const user = await deleteUserSrv(id);
    res.status(201).send("User deleted");
  } catch (err) {
    handleHttp(res, message.concat(`${err}`));
  }
};

export {
  postUserCtrl,
  getUserCtrl,
  getUsersCtrl,
  updateUserCtrl,
  deleteUserCtrl,
};
