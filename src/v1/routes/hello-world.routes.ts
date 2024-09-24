import { Router } from "express"
import { handle } from "../../api/utils"
import { helloWorld } from "../controllers"

const router = Router()

router.get("/", handle(helloWorld))

export default router
