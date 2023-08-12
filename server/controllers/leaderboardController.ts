import { Request, Response } from 'express'
import axios from 'axios'
import Player from '../models/player.ts'

const GENDERIZE_API_URL = 'https://api.genderize.io'
const RANDOM_USER_API_URL = 'https://randomuser.me/api'
const UNDETERMINED = 'undetermined'

const getLeaderboard = async (req: Request, res: Response) => {
  try {
    const leaderboard = await Player.find().sort({ score: -1 })
    res.json(leaderboard)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Internal server error' })
  }
}

const updateLeaderboard = async (req: Request, res: Response) => {
  try {
    const { playerName, playerScore } = req.body
    let player = await Player.findOne({ "name": playerName })
    if (player) {
      if (player.score >= playerScore) {
        res.status(200).json({ message: `No update done, score is lower than ${playerName} record` })
        return
      }
      player.score = playerScore
    } else {
        const genderResponse = await axios.get(`${GENDERIZE_API_URL}/?name=${playerName}`)
        const playerGender = genderResponse.data.probability > 0.95 ? genderResponse.data.gender : UNDETERMINED
        //Random api returns data for random gender for any value not in ['male', 'female']
        const randomUserResponse = await axios.get(`${RANDOM_USER_API_URL}/?gender=${playerGender}`)
        delete randomUserResponse.data.results[0]['gender']
        player = new Player({
          name: playerName,
          score: playerScore,
          gender: playerGender,
          additionalInfo: randomUserResponse.data.results[0]
        })
    }
    let result = await player.save()
    if (result) {
      res.status(200).json({ message: `Updated ${playerName} score to ${playerScore}` })
    }
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export default { getLeaderboard, updateLeaderboard }
