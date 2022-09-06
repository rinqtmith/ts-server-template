import dotenv from 'dotenv'
import express, { NextFunction, Response, Request } from 'express'
import { Error } from './interfaces'
import baseRoutes from './routes/base'
import cors from 'cors'

dotenv.config()

const app = express()
const port = process.env.PORT ?? '8000'

app.use(cors())
app.use(express.json())

app.use('/api', baseRoutes)

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status ?? 500
  const message = err.message ?? 'Something went wrong!'

  return res.status(status).json({
    success: false,
    status,
    message
  })
})

app.listen(port, () => {
  console.log(`⚡[server]: Server is running at https://localhost:${port}`)
})
