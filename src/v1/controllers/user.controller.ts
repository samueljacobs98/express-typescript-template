import { Response } from "express"
import { StatusCodes } from "http-status-codes"
import { ParsedRequest } from "../../api/types"
import { createUserSchema } from "../schemas"

export async function createUser(
  req: ParsedRequest<typeof createUserSchema>,
  res: Response
) {
  const logger = req.logger
  logger.info("User creation request received from ", req.parsedData.name)

  // Simulate user creation logic
  const newUser = {
    id: Date.now(),
    name: req.parsedData.name,
    email: req.parsedData.email
  }

  res.status(StatusCodes.CREATED).json({
    message: "User created successfully",
    data: newUser
  })
}
