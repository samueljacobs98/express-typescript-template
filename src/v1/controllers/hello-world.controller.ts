import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const helloWorldHandler = async (req: Request, res: Response) => {
  const logger = res.locals.logger;

  logger.info("Hello world request received");

  res.status(StatusCodes.OK).json({
    message: "Hello, World!",
  });
};
