import { Router } from "express"
import { validate } from "../../api/middleware"
import { handle } from "../../api/utils"
import { createUser } from "../controllers"
import { createUserSchema } from "../schemas"

const router = Router()

router.post("/", validate(createUserSchema), handle(createUser))

export default router
