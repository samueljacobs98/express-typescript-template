import express, { Application } from "express"
import "express-async-errors"
import logger from "./api/logger"
import {
  errorHandler,
  loggerMiddleware,
  requestIdMiddleware
} from "./api/middleware"
import routes from "./api/routes"

const app: Application = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(requestIdMiddleware)
app.use(loggerMiddleware)

app.use("/api", routes)

app.use(errorHandler)

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`)
})
