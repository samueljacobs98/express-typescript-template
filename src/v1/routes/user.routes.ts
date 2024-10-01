import { Router } from "express"
import { validate } from "../../api/middleware"
import { parsed } from "../../api/utils"
import { createUser } from "../controllers"
import { createUserSchema } from "../schemas"

const router = Router()

router.post("/", validate(createUserSchema), parsed(createUser))

export default router
