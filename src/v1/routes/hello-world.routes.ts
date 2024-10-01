import { Router } from "express"
import { parsed } from "../../api/utils"
import { helloWorld } from "../controllers"

const router = Router()

router.get("/", parsed(helloWorld))

export default router
