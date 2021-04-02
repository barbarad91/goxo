import express from 'express'
import Dish from '../models/Dish.model'

const router = express.Router()

router.get('/all', async (req, res) => {
  const allDishes = await Dish.find()
  res.json(allDishes)
})
export default router
