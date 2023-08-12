import mongoose from 'mongoose'

const playerSchema = new mongoose.Schema({
  name: String,
  score: Number,
  gender: String,
  additionalInfo: Object,
})

const Player = mongoose.model('Player', playerSchema)

export default Player
