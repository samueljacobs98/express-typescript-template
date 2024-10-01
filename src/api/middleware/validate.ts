import { NextFunction, Request, Response } from "express"
import { ZodSchema } from "zod"
import { ValidationError } from "../errors"
import { ParsedRequest } from "../types"

export const validate =
  <Schema extends ZodSchema>(schema: Schema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const parsedData = schema.safeParse(req)
    if (!parsedData.success) {
      next(new ValidationError(parsedData.error.errors))
    } else {
      ;(req as ParsedRequest<Schema>).parsedData = parsedData.data
      next()
    }
  }
