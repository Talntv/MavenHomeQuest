import { SUCCESS, WRONG_KEY } from "../Consts"
import { MonitorSide } from "../components/game/GameManager"

export const getFeedbackText = (key: string, indicatorPosition: MonitorSide) => {
    switch (key) {
        case 'a':
            return indicatorPosition === 'Left' ? SUCCESS : WRONG_KEY
        case 'l':
            return indicatorPosition === 'Right' ? SUCCESS : WRONG_KEY
        default:
            return WRONG_KEY
    }
}

export const clearAllTimeOuts = (timeoutsList: ReturnType<typeof setTimeout>[]) => {
    timeoutsList.forEach(timeout => {
      clearTimeout(timeout)
    })
  }