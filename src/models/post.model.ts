import config from "../config/database/db.config";
import { Association, DataTypes } from "sequelize";
import TagModel from "./tag.model";
import userModel from "./user.model";

const PostModel = config.sq.define("post", {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  tag: { type: DataTypes.STRING, allowNull: false },
});

PostModel.hasMany(TagModel, {
  foreignKey: "tag",
  onDelete: "cascade",
});

PostModel.sync();

export default PostModel;
