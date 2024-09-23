import { Request } from "express"
import { z, ZodSchema } from "zod"

export type ParsedRequest<Schema extends ZodSchema> = Request & {
  parsedData: z.infer<Schema>
}
