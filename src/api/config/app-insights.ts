import { z } from "zod"

const schema = z.object({
  connectionString: z.string().optional()
})

const config = schema.parse({
  connectionString: process.env.APPINSIGHTS_CONNECTION_STRING
})

export default config
