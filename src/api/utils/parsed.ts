import { Request, Response, NextFunction } from "express"
import { ZodSchema } from "zod"
import { ParsedRequest } from "../types"

export function parsed<Schema extends ZodSchema>(
  handler: (
    req: ParsedRequest<Schema>,
    res: Response,
    next: NextFunction
  ) => void
) {
  return (req: Request, res: Response, next: NextFunction) =>
    handler(req as ParsedRequest<Schema>, res, next)
}
