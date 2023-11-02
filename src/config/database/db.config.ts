import { Sequelize } from "sequelize";

import {
  PostgressDatabase,
  PostgressHost,
  PostgressPassword,
  PostgressUsername,
} from "../../utils/types";
import {
  POSTGRESS_DATABASE,
  POSTGRESS_HOST,
  POSTGRESS_PASSWORD,
  POSTGRESS_USERNAME,
} from "../env.types";

const user = POSTGRESS_USERNAME as PostgressUsername;
const host = POSTGRESS_HOST as PostgressHost;
const database = POSTGRESS_DATABASE as PostgressDatabase;
const password = POSTGRESS_PASSWORD as PostgressPassword;

const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: "postgres",
});

const databaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};

export default { sq: sequelize, db: databaseConnection };
