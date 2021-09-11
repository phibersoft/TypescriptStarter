import CERROR from "../classes/CERROR";
import { NextFunction, Request, Response } from "express";
import { Server_Response_Failure } from "../types";
import * as chalk from "chalk";

const errorHandler = async (
  err: CERROR,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err) {
    console.log(chalk.redBright(`${err?.name} -> ${err?.statusCode || 500} -> ${err?.message}`));

    return res.status(err?.statusCode || 500).json({
      success: false,
      message: err.message,
    } as Server_Response_Failure);
  }

  return res.status(500).json({
    success: false,
    message: "Catched by error handler but no error found.",
  } as Server_Response_Failure);
};

export default errorHandler;