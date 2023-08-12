import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { Styles } from '../styles'

interface PlayerFormProps {
  playerName: string,
  setPlayerName: (value: string) => void
  onStart: (playerName: string) => void
}

const PlayerForm: React.FC<PlayerFormProps> = ({ playerName, setPlayerName, onStart }) => {

  const handleStart = () => {
    if (playerName.trim() === '') return
    onStart(playerName)
  }

  return (
    <div style={Styles.loginScreenStyle}>
      <TextField
        label="Enter your name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        margin="normal"
        size='small'
      />
      <Button variant="contained" onClick={handleStart}>{"START"}</Button>
    </div>
  )
}

export default PlayerForm
