import { Express } from 'express'
import authRouter from './auth.routes'
import healthcheckRouter from './healthcheck.routes'
import dishesRouter from './dishes.routes'

const routesDefinition = (app: Express) => {
  app.use('/api/healthcheck', healthcheckRouter)
  app.use('/api/auth', authRouter)
  app.use('/api/dishes', dishesRouter)
}

export default routesDefinition
