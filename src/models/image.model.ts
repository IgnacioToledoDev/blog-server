import config from "../config/database/db.config";
import { DataTypes } from "sequelize";
import PostModel from "./post.model";

const imageModel = config.sq.define("image", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  url: { type: DataTypes.STRING, allowNull: false },
});

imageModel.belongsTo(PostModel, {
  foreignKey: "image",
  onDelete: "cascade",
});

imageModel.sync();

export default imageModel;
