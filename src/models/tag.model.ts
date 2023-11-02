import config from "../config/database/db.config";
import { DataTypes } from "sequelize";
import PostModel from "./post.model";

const TagModel = config.sq.define("tag", {
  name: { type: DataTypes.STRING, allowNull: false },
});

TagModel.belongsTo(PostModel, {
  foreignKey: "tag",
  onDelete: "cascade",
});

TagModel.sync();

export default TagModel;
