const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true // 唯一的，不可重复的
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    }
  }
})

const User = mongoose.model('User', userSchema)

module.exports = {
  User
}