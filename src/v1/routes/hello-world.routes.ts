import { Router } from "express";
import { helloWorldHandler } from "../controllers";

const router = Router();

router.get("/", helloWorldHandler);

export default router;
