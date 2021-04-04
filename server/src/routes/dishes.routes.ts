import express from 'express'
import Dish from '../models/Dish.model'

const router = express.Router()

router.get('/all', async (req, res) => {
  try {
    const allDishes = await Dish.find().populate('restaurant').sort('restaurant')
    res.json(allDishes)
  } catch (error) {
    console.log(error)
  }
})
export default router
