import express from 'express'
import leaderboardController from '../controllers/leaderboardController.ts'

const router = express.Router()

// API endpoints
router.get('/leaderboard', leaderboardController.getLeaderboard)
router.post('/leaderboard', leaderboardController.updateLeaderboard)

export default router
