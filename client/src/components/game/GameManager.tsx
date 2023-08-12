import React, { useState, useEffect, useRef } from 'react'
import { Styles } from '../../styles'
import { clearAllTimeOuts, getFeedbackText } from '../../utils/commonUtils'
import { SUCCESS, TOO_LATE, TOO_SOON } from '../../Consts'

export type MonitorSide = 'Left' | 'Right'

interface GameProps {
  onCorrectStep: () => void
}

const Game: React.FC<GameProps> = props => {
  const [isIndicatorVisible, setIsIndicatorVisible] = useState(false)
  const [indicatorPosition, setIndicatorPosition] = useState<MonitorSide>('Left')
  const [feedbackMsg, setFeedbackMsg] = useState<string>()
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const handleKeyPress = (event: KeyboardEvent) => {
    clearAllTimeOuts(timeoutIdRef.current)
    if (!isIndicatorVisible) {
      setFeedbackMsg(TOO_SOON)
      showIndicator()
    }
    else {
        const feedbackText = getFeedbackText(event.key, indicatorPosition)
        setFeedbackMsg(feedbackText)
        if (feedbackText === SUCCESS) {
          props.onCorrectStep()
        }
        setIsIndicatorVisible(false)
    }
  }

  const showIndicator = () => {
    const waitingPeriod = (Math.random() * 3000) + 2000
    timeoutIdRef.current.push(setTimeout(() => {
      setFeedbackMsg('')
      setIndicatorPosition(Math.random() > 0.5 ? 'Left' : 'Right')
      setIsIndicatorVisible(true)
    }, waitingPeriod))
    window.addEventListener('keydown', handleKeyPress)
  }

  const hideIndicator = () => {
    timeoutIdRef.current.push(setTimeout(() => {
      setIsIndicatorVisible(false)
    }, 1000))
    window.addEventListener('keydown', handleKeyPress)
  }

  useEffect(() => {
    if (!isIndicatorVisible) {
      setFeedbackMsg(feedbackMsg === '' ? TOO_LATE : feedbackMsg)
      showIndicator()
    }
    else {
      hideIndicator()
    }
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      clearAllTimeOuts(timeoutIdRef.current)
    }
  }, [isIndicatorVisible])

  return (
    <>
      {isIndicatorVisible ?
        <div style={{...Styles.circleStyle, right: indicatorPosition === 'Left' ? '75%' : 'auto', left: indicatorPosition === 'Right' ? '75%' : 'auto' }}/>
        :
        <h1 style={{...Styles.objectMidScreenStyle, color: feedbackMsg === SUCCESS ? 'green' : 'red'}} >{feedbackMsg}</h1>}
    </>
  )
}

export default Game
