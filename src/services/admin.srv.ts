import { User } from "../interface/user.interface";
import Admin from "../models/user.model";
import { encrypt } from "../utils/handlePass";
import { UserInput } from "../utils/types";
import { roles } from "../utils/Enum";

const postNewAdminSrv = async (user: UserInput) => {
  const checkIs = await Admin.findOne({ where: { email: user.email } });
  if (checkIs) return "already_user";
  if (user.role.toLowerCase() === roles[0]) return "user role not allowed";

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

const getAdminsSrv = async () => {
  const admins = await Admin.findAll();
  return admins;
};

const getAdminSrv = async (id: number) => {
  const user = Admin.findByPk(id);
  return user;
};

const updateAdminSrv = async (id: string, user: User) => {
  const updateUser = Admin.update({ ...user }, { where: { id: id } });
  return updateUser;
};

const deleteAdminSrv = async (id: string) => {
  const deleteAdmin = Admin.destroy({ where: { id: parseInt(id) } });
  return deleteAdmin;
};

export {
  postNewAdminSrv,
  getAdminsSrv,
  getAdminSrv,
  updateAdminSrv,
  deleteAdminSrv,
};
