import { StatusCodes } from "http-status-codes"
import { ZodIssue } from "zod"
import { BaseError } from "./base-error"

export class ValidationError extends BaseError<ZodIssue[]> {
  constructor(details: ZodIssue[], message = "Validation error") {
    super(message, StatusCodes.BAD_REQUEST, details)
  }
}

export class NotFoundError extends BaseError<Record<string, unknown>> {
  constructor(
    message = "Resource not found",
    details?: Record<string, unknown>
  ) {
    super(message, StatusCodes.NOT_FOUND, details)
  }
}

export class UnauthorizedError extends BaseError<void> {
  constructor(message = "Unauthorized") {
    super(message, StatusCodes.UNAUTHORIZED)
  }
}

export class BadRequestError extends BaseError<void> {
  constructor(message = "Bad request") {
    super(message, StatusCodes.BAD_REQUEST)
  }
}
