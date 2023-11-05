import config from "../config/database/db.config";
import { DataTypes } from "sequelize";
import TagModel from "./tag.model";
import imageModel from "./image.model";

const PostModel = config.sq.define("post", {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.ARRAY(DataTypes.BLOB), allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  tag: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
});

PostModel.hasMany(TagModel, {
  foreignKey: "postId",
  scope: { status: "open" },
  onDelete: "cascade",
});

PostModel.hasMany(imageModel, {
  foreignKey: "postId",
  scope: { status: "open" },
  onDelete: "cascade",
});

console.log(PostModel.tableName, PostModel.getAttributes());
export default PostModel;
