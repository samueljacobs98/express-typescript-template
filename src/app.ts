import dotenvx from "@dotenvx/dotenvx"
import cors from "cors"
import express, { Application } from "express"
import "express-async-errors"
import path from "path"
import config from "./api/config"
import logger from "./api/logger"
import {
  errorHandler,
  loggerMiddleware,
  requestIdMiddleware
} from "./api/middleware"
import routes from "./api/routes"

dotenvx.config({
  path: path.resolve(__dirname, "..", `.env.${process.env.NODE_ENV}`)
})

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(requestIdMiddleware)
app.use(loggerMiddleware)

app.use("/api", routes)

app.use(errorHandler)

app.listen(config.app.port, () => {
  logger.info(`Server is running on port ${config.app.port}`)
})
