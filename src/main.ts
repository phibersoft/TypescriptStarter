import * as express from "express";
import CERROR from "./classes/CERROR";
import errorHandler from "./middlewares/errorHandler";
import securityHandler  from "./middlewares/securityHandler";

require("dotenv").config();

const PORT = process.env.PORT || 9090;
const app = express();
const wrapper = require("express-async-wrapper");

app.use(securityHandler);

app.all(
  "/",
  wrapper(async (req, res) => {
    throw new CERROR("Error by me", 400);
  })
);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Up! Listening On: http://localhost:${PORT}`);
});
