import { NextFunction, Request, Response } from "express"
import { v4 as uuid } from "uuid"

export function requestIdMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const requestId = uuid()
  res.locals.id = requestId
  res.setHeader("X-Request-Id", requestId)
  next()
}
