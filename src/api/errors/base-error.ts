export abstract class BaseError<T = unknown> extends Error {
  public readonly statusCode: number
  public readonly details?: T

  constructor(message: string, statusCode: number, details?: T) {
    super(message)

    Object.setPrototypeOf(this, new.target.prototype)

    this.statusCode = statusCode
    this.details = details

    Error.captureStackTrace(this)
  }
}
