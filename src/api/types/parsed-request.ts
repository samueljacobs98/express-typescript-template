import { Logger } from "winston"
import { ZodSchema, z } from "zod"
import { RequestWith } from "./request-with"

export type ParsedRequest<Schema = undefined> = RequestWith<{
  logger: Logger
  parsedData: Schema extends ZodSchema ? z.output<Schema> : undefined
}>
