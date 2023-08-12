import mongoose from 'mongoose'

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  gender: {
    type: String
  },
  additionalInfo: {
    type: Object
  }
})

const Player = mongoose.model('Player', playerSchema)

export default Player
