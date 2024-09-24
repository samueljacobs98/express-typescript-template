import { Response } from "express"
import { StatusCodes } from "http-status-codes"
import { ParsedRequest } from "../../api/types"
import { createUserSchema } from "../schemas"

export function createUser(
  req: ParsedRequest<typeof createUserSchema>,
  res: Response
) {
  const logger = res.locals.logger

  const { name, email } = req.parsedData

  logger.info("User creation request received", {
    name,
    email
  })

  // Simulate user creation logic
  const newUser = {
    id: Date.now(),
    name,
    email
  }

  res.status(StatusCodes.CREATED).json({
    message: "User created successfully",
    data: newUser
  })
}
