import { Request } from "express"

export type RequestWith<Enrichments extends object> = Request & Enrichments
