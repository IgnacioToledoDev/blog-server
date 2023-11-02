import config from "../config/database/db.config";
import { DataTypes } from "sequelize";

const AdminModel = config.sq.define("admin", {
  name: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  isAdmin: { type: DataTypes.BOOLEAN, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false },
});

export default AdminModel;
