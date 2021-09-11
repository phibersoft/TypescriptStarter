import * as cors from "cors";
import * as helmet from "helmet";
import { NextFunction, Request, Response } from "express";

export const corsConfig: cors.CorsOptions = {
  allowedHeaders: "*",
  methods: "*",
};

const securityHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await cors(corsConfig);
  await helmet();

  next();
};

export default securityHandler;
