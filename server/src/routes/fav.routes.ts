import express from 'express'
import Fav from '../models/Fav.model'
import Dish from '../models/Dish.model'

const router = express.Router()

router.post('/:id', async (req, res) => {
  const dish = Dish.findById(req.params.id)
})

export default router
