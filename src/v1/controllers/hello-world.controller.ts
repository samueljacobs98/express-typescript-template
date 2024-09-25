import { Response } from "express"
import { StatusCodes } from "http-status-codes"
import { ParsedRequest } from "../../api/types"

export function helloWorld(req: ParsedRequest, res: Response) {
  const logger = req.logger
  logger.info("Hello world request received")

  res.status(StatusCodes.OK).json({
    message: "Hello, World!"
  })
}
