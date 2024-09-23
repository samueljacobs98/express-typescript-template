import { Router } from "express"
import userRouter from "./user.routes"
import helloWorldRouter from "./hello-world.routes"

const router = Router()

router.use("/hello-world", helloWorldRouter)
router.use("/users", userRouter)

export default router
