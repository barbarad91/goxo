import mongoose from 'mongoose'

const dishSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
})

export default mongoose.model('Dish', dishSchema)
