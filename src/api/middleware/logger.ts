import { NextFunction, Request, Response } from "express"
import logger from "../logger"

export function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const requestId = res.locals.id || "N/A"

  res.locals.logger = logger.child({ requestId })

  next()
}
