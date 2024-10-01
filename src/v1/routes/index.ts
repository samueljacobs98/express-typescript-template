import { Router } from "express"
import helloWorldRouter from "./hello-world.routes"
import userRouter from "./user.routes"

const router = Router()

router.use("/hello-world", helloWorldRouter)
router.use("/users", userRouter)

export default router
