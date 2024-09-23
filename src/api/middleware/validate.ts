import { NextFunction, Request, Response } from "express"
import { ZodSchema } from "zod"
import { ParsedRequest } from "../types"

export const validate =
  <Schema extends ZodSchema>(schema: Schema) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedData = schema.parse(req)

      ;(req as ParsedRequest<Schema>).parsedData = parsedData

      next()
    } catch (error) {
      next(error)
    }
  }
