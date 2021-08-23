import { Request, Response, Application } from "express";
const express = require("express");
const app: Application = express();
const PORT = process.env.PORT || 5000;

app.get("/", async (req: Request, res: Response) => {
  res.json({ message: "Hello World  !" });
});

app.listen(PORT, () => console.log(`Server up on localhost:${PORT}`));
