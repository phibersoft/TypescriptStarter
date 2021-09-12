import * as cors from "cors";
import * as helmet from "helmet";
import {Express, NextFunction, Request, Response} from "express";

export const corsConfig: cors.CorsOptions = {
  allowedHeaders: "*",
  methods: "*",
};


const securityHandler = (app: Express) => {
  app.use(cors(corsConfig));
  app.use(helmet());
}

export default securityHandler;
