import express from 'express'
import Restaurant from '../models/Restaurant.model'

const router = express.Router()

router.get('/all', async (req, res) => {
  try {
    const allRestaurants = await Restaurant.find()
    res.json(allRestaurants)
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id).select('name')
    res.json(restaurant)
  } catch (error) {
    console.log(error)
  }
})
export default router
