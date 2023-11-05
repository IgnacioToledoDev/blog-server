import config from "../config/database/db.config";
import { DataTypes } from "sequelize";
import PostModel from "./post.model";

const imageModel = config.sq.define("image", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  filename: { type: DataTypes.STRING, allowNull: false },
  path: { type: DataTypes.BLOB, allowNull: false },
  postId: { type: DataTypes.INTEGER, allowNull: false },
});

imageModel.sync();

export default imageModel;
