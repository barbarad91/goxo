import { Express } from 'express'
import authRouter from './auth.routes'
import healthcheckRouter from './healthcheck.routes'
import dishesRouter from './dishes.routes'
import restaurantsRouter from './restaurants.routes'

const routesDefinition = (app: Express) => {
  app.use('/api/healthcheck', healthcheckRouter)
  app.use('/api/auth', authRouter)
  app.use('/api/dishes', dishesRouter)
  app.use('/api/restaurants', restaurantsRouter)
}

export default routesDefinition
