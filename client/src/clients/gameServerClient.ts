import axios from 'axios'

class GameServerClient {
    async updateLeaderboard (playerName: string, playerScore: number) {
        const requestBody = {
            playerName: playerName,
            playerScore: playerScore
        }
        try {
            await axios.post('/api/leaderboard', requestBody)
          }
          catch (e) {
            console.log(e)
          }
    }

    async getLeaderboard () {
        try {
            const response = await axios.get('api/leaderboard')
            return response.data
        }
        catch (e) {
            console.error(e)
        }
    }
}

export const gameServerClient = new GameServerClient()
