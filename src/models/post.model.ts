import config from "../config/database/db.config";
import { DataTypes } from "sequelize";

const PostModel = config.sq.define("post", {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
});

export default PostModel;
