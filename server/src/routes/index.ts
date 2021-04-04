import { Express } from 'express'
import authRouter from './auth.routes'
import healthcheckRouter from './healthcheck.routes'
import dishesRouter from './dishes.routes'
import restaurantsRouter from './restaurants.routes'
import avatarRouter from './avatar.routes'
import favRouter from './fav.routes'

const routesDefinition = (app: Express) => {
  app.use('/api/healthcheck', healthcheckRouter)
  app.use('/api/auth', authRouter)
  app.use('/api/dishes', dishesRouter)
  app.use('/api/restaurants', restaurantsRouter)
  app.use('/api/avatar', avatarRouter)
  app.use('/api/fav', favRouter)
}

export default routesDefinition
