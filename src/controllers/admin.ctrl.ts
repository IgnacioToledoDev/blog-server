import { Request, Response } from "express";
import { handleHttp } from "../utils/handleHttp";
import {
  deleteAdminSrv,
  getAdminSrv,
  getAdminsSrv,
  postNewAdminSrv,
  updateAdminSrv,
} from "../services/admin.srv";

import { message } from "../utils/utils";

const getAdminCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const users = await getAdminSrv(parseInt(id));

    res.send(users);
  } catch (err) {
    handleHttp(res, message.concat(`${err}`));
  }
};

const postAdminCtrl = async ({ body }: Request, res: Response) => {
  try {
    const user = await postNewAdminSrv(body);
    res.send(user);
  } catch (err) {
    handleHttp(res, message.concat(`${err}`));
  }
};

const getAdminsCtrl = async (req: Request, res: Response) => {
  try {
    const user = await getAdminsSrv();
    res.send(user).json();
  } catch (err) {
    handleHttp(res, message.concat(`${err}`));
  }
};

const updateAdminCtrl = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const user = await updateAdminSrv(id, body);
    console.log("User updated");
    res.send(user);
  } catch (err) {
    handleHttp(res, message.concat(`${err}`));
  }
};

const deleteAdminCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const user = await deleteAdminSrv(id);
    res.status(201).send("User deleted");
  } catch (err) {
    handleHttp(res, message.concat(`${err}`));
  }
};

export {
  deleteAdminCtrl,
  getAdminCtrl,
  getAdminsCtrl,
  postAdminCtrl,
  updateAdminCtrl,
};
