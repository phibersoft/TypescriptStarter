import * as express from "express";
import * as helmet from "helmet";
import CERROR from "./classes/CERROR";
import errorHandler from "./middlewares/errorHandler";

require("dotenv").config();

const PORT = process.env.PORT || 9090;
const app = express();
const wrapper = require("express-async-wrapper");

app.use(helmet());

app.get(
  "/",
  wrapper(async (req, res) => {
    throw new CERROR("Error by me", 400);
  })
);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Up! Listening On: http://localhost:${PORT}`);
});
