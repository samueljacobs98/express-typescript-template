import { Request } from "express"
import { ZodSchema, z } from "zod"

export type ParsedRequest<Schema extends ZodSchema> = Request & {
  parsedData: z.infer<Schema>
}
