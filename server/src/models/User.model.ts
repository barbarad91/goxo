import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: {
      validator: function (usernameInput: string) {
        return /^([\w-\.\+]+@([\w-]+\.)+[\w-]{2,4})?$/gi.test(usernameInput)
      },
      message: (props) => `${props.value} is not a valid email`,
    },
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
})

export default mongoose.model('User', userSchema)
