import config from "../config/database/db.config";
import { DataTypes } from "sequelize";
import PostModel from "./post.model";

const userModel = config.sq.define("admin", {
  name: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  isAdmin: { type: DataTypes.BOOLEAN, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false },
});

userModel.hasMany(PostModel, {
  foreignKey: "id",
  onDelete: "cascade",
});

userModel.sync();

export default userModel;
