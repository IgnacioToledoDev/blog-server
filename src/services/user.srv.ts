//// this change to admin.srv.ts all content from user.srv.ts

import { User } from "../interface/user.interface";
import Admin from "../models/user.model";
import { encrypt } from "../utils/handlePass";
import { UserInput } from "../utils/types";
import { roles } from "../utils/Enum";
import UserModel from "../models/user.model";

const postNewUseSrv = async (user: UserInput) => {
  const checkIs = await UserModel.findOne({ where: { email: user.email } });
  if (checkIs) return "already_user";
  if (user.role.toLowerCase() === roles[0]) return "user role not allowed";

  const { name, lastName, email, isAdmin, role } = user;
  const passHash: string = await encrypt(user.password);
  const data = await UserModel.create({
    name,
    lastName,
    email,
    password: passHash,
    isAdmin,
    role,
  });

  return data;
};

const getUsersSrv = async () => {
  const users = await UserModel.findAll();
  return users;
};

const getUserSrv = async (id: number) => {
  const user = UserModel.findByPk(id);
  return user;
};

const updateUserSrv = async (id: string, user: User) => {
  const updateUser = UserModel.update({ ...user }, { where: { id: id } });
  return updateUser;
};

const deleteUserSrv = async (id: string) => {
  const deleteUser = UserModel.destroy({ where: { id: parseInt(id) } });
  return deleteUser;
};

export { postNewUseSrv, getUserSrv, getUsersSrv, updateUserSrv, deleteUserSrv };
