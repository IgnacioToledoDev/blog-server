import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./src/routes/index";
import dbConnect from "./src/config/database/db.config";
import helmet from "helmet";
import limiter from "./src/middlewares/rateLimit";
import bodyParser from "body-parser";
import hpp from "hpp";

dotenv.config();
const PORT = process.env.PORT;

const app: Application = express();

app.use(limiter);
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(hpp());
app.use(helmet());
app.use(express.json());
app.use(router);

dbConnect.sq
  .authenticate()
  .then(() => {
    console.log("Connection success");
    return dbConnect.sq.sync();
  })
  .then(() => {
    console.log("Sync success");
    app.listen(PORT, () => {
      console.log(`Server running on port https://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

export default app;
