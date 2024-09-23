import logger from "../logger"
import { Request, Response, NextFunction } from "express"

export function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const requestId = res.locals.id || "N/A"

  res.locals.logger = logger.child({ requestId })

  next()
}
