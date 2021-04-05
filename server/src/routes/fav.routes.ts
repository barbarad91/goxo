import express from 'express'
import Fav from '../models/Fav.model'

const router = express.Router()

router.get('/userfavs/:userId', async (req, res) => {
  try {
    const allFavs = await Fav.find({ user: req.params.userId })
    res.json(allFavs)
  } catch (error) {
    console.log(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const dishFav = await Fav.findOne({ dish: req.body.dishId, user: req.body.userId })

    if (dishFav) {
      res.json(dishFav)
      return
    }

    const newFav = await Fav.create({ dish: req.body.dishId, user: req.body.userId })
    res.json(newFav)
  } catch (error) {
    console.log(error)
  }
})

router.delete('/', async (req, res) => {
  try {
    const dishFav = await Fav.findOne({ dish: req.body.dishId, user: req.body.userId })

    if (!dishFav) {
      return
    }

    const deletedFav = await Fav.deleteOne({ dish: req.body.dishId, user: req.body.userId })
    res.json(deletedFav)
  } catch (error) {
    console.log(error)
  }
})

export default router
