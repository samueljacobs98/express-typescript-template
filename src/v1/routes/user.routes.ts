import { Router } from "express";
import { validate } from "../../api/middleware";
import { createUserSchema } from "../schemas";
import { createUserHandler } from "../controllers";
import { parsed } from "../../api/utils";

const router = Router();

router.post("/", validate(createUserSchema), parsed(createUserHandler));

export default router;
