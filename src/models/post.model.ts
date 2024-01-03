import config from "../config/database/db.config";
import { DataTypes } from "sequelize";
import TagModel from "./tag.model";
import imageModel from "./image.model";

const PostModel = config.sq.define("post", {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  image: { type: DataTypes.TEXT, allowNull: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  tag: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
});

PostModel.hasMany(TagModel, {
  foreignKey: "postId",
  scope: { status: "open" },
  onDelete: "cascade",
});

// PostModel.hasMany(imageModel, {
//   foreignKey: "postId",
//   scope: { status: "open" },
//   onDelete: "cascade",
// });

PostModel.sync();
console.log(PostModel.getAttributes());

export default PostModel;
