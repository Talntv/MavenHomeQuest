import { SUCCESS } from "../Consts"
import { Styles } from "../styles"

interface FeedbackTextProps {
    feedbackMsg?: string
  }

const FeedbackText: React.FC<FeedbackTextProps> = ({ feedbackMsg }) => {
    return (
        <>
            <h1 style={{...Styles.feedbackMessageStyle, color: feedbackMsg === SUCCESS ? 'green' : 'red'}} >{feedbackMsg}</h1>
        </>
    )
}

export default FeedbackText
