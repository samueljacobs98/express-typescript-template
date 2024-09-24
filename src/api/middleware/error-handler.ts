import { NextFunction, Request, Response } from "express"
import { StatusCodes, getReasonPhrase } from "http-status-codes"
import { BaseError } from "../errors"
import logger from "../logger"

export function errorHandler(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  logger.error(err)

  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
      details: err.details ?? null
    })
  }

  const statusCode = err.status || StatusCodes.INTERNAL_SERVER_ERROR
  return res.status(statusCode).json({
    status: "error",
    message: err.message || getReasonPhrase(statusCode),
    details: err.details || null
  })
}
