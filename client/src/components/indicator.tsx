import { Styles } from "../styles"
import { MonitorSide } from "./game/GameManager"

interface IndicatorProps {
    position: MonitorSide
  }

const Indicator: React.FC<IndicatorProps> = ({ position }) => {
    return (
        <div style={{...Styles.circleStyle, right: position === 'Left' ? '75%' : 'auto', left: position === 'Right' ? '75%' : 'auto' }}/>
    )
}

export default Indicator
