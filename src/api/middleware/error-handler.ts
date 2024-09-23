import { Request, Response, NextFunction } from "express"
import { StatusCodes, getReasonPhrase } from "http-status-codes"
import { ZodError } from "zod"
import logger from "../logger"

export function errorHandler(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) {
  logger.error(err)

  if (err instanceof ZodError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: "error",
      message: "Validation Error",
      details: err.errors,
    })
  }

  if (err.name === "UnauthorizedError") {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      status: "error",
      message: "Invalid token",
    })
  }

  const statusCode = err.status || StatusCodes.INTERNAL_SERVER_ERROR
  return res.status(statusCode).json({
    status: "error",
    message: err.message || getReasonPhrase(statusCode),
    details: err.details || null,
  })
}
