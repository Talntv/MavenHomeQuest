import React, { useState } from 'react'
import PlayerForm from './components/PlayerForm'
import Game from './components/game/GameManager'
import { gameServerClient } from './clients/gameServerClient'

enum AppPhase {
  PlayerForm,
  Game,
}

const App: React.FC = () => {
  const [phase, setPhase] = useState<AppPhase>(AppPhase.PlayerForm)
  const [playerName, setPlayerName] = useState('')
  const [correctSteps, setCorrectSteps] = useState(0)

  const onCorrectStep = async () => {
    const newScore = correctSteps + 1
    setCorrectSteps(newScore)
    await gameServerClient.updateLeaderboard(playerName, newScore)
  }

  const onStartGame = async (name: string) => {
    setPhase(AppPhase.Game)
    await gameServerClient.updateLeaderboard(name, 0)
  }

  return (
    <>
      {phase === AppPhase.PlayerForm && <PlayerForm playerName={playerName} setPlayerName={setPlayerName} onStart={onStartGame} />}
      {phase === AppPhase.Game && <Game onCorrectStep={onCorrectStep} />}
    </>
  )
}

export default App
