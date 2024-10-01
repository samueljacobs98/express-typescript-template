export abstract class BaseError<DETAILS = unknown> extends Error {
  public readonly statusCode: number
  public readonly details?: DETAILS

  constructor(message: string, statusCode: number, details?: DETAILS) {
    super(message)

    Object.setPrototypeOf(this, new.target.prototype)

    this.statusCode = statusCode
    this.details = details

    Error.captureStackTrace(this)
  }
}
