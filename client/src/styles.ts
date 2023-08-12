export const Styles = {
    loginScreenStyle: {
      display: 'flex',
      flexDirection: 'column' as 'column', //This is necesarry to stop TS from complaining
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    feedbackMessageStyle: {
      display: 'flex',
      justifyContent: 'center',
      transform: 'translateY(70vh)'
    },
    circleStyle: {
      position: 'absolute' as 'absolute',
      top: '50%',
      width: '100px',
      height: '100px',
      borderRadius: '50px',
      backgroundColor: '#cc34eb'
    }
}