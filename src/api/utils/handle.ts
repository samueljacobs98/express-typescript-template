import { NextFunction, Request, Response } from "express"
import { ZodSchema } from "zod"
import { ParsedRequest } from "../types"

export function handle<Schema extends ZodSchema>(
  handler: (
    req: ParsedRequest<Schema>,
    res: Response,
    next: NextFunction
  ) => void | Promise<void>
) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(handler(req as ParsedRequest<Schema>, res, next)).catch(
      next
    )
  }
}
