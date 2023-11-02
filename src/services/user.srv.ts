//// this change to admin.srv.ts all content from user.srv.ts

import { User } from "../interface/user.interface";
import Admin from "../models/user.model";
import { encrypt } from "../utils/handlePass";
import { UserInput } from "../utils/types";
import { roles } from "../utils/Enum";

const postNewUseSrv = async (user: UserInput) => {
  const checkIs = await Admin.findOne({ where: { email: user.email } });
  if (checkIs) return "already_user";
  if (user.role.toLowerCase() !== roles[0]) return "user role not allowed";
  const countAdmin = await Admin.findAll();
  if (countAdmin) return "Max limit";

  const { name, lastName, email, isAdmin, role } = user;
  const passHash: string = await encrypt(user.password);
  const data = await Admin.create({
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
  const admins = await Admin.findAll();
  return admins;
};

const getUserSrv = async (id: number) => {
  const user = Admin.findByPk(id);
  return user;
};

const updateUserSrv = async (id: string, user: User) => {
  const updateUser = Admin.update({ ...user }, { where: { id: id } });
  return updateUser;
};

const deleteUserSrv = async (id: string) => {
  const deleteUser = Admin.destroy({ where: { id: parseInt(id) } });
  return deleteUser;
};

export { postNewUseSrv, getUserSrv, getUsersSrv, updateUserSrv, deleteUserSrv };
