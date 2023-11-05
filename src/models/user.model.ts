import config from "../config/database/db.config";
import { DataTypes } from "sequelize";
import PostModel from "./post.model";

const UserModel = config.sq.define("user", {
  name: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: true },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  isAdmin: { type: DataTypes.BOOLEAN, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false },
});

UserModel.hasMany(PostModel, {
  foreignKey: "userId",
  scope: { status: "open" },
  onDelete: "cascade",
});

export default UserModel;
