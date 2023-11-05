import config from "../config/database/db.config";
import { DataTypes } from "sequelize";

const TagModel = config.sq.define("tag", {
  name: { type: DataTypes.STRING, allowNull: false },
  postId: { type: DataTypes.INTEGER, allowNull: true },
});

console.log(TagModel.getAttributes());

export default TagModel;
