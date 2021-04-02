import mongoose from 'mongoose'

const favSchema = new mongoose.Schema({
  dish: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
})

export default mongoose.model('Fav', favSchema)
