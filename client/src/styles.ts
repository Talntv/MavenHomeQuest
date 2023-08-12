export const Styles = {
    objectMidScreenStyle: {
        display: 'flex',
        flexDirection: 'column' as 'column', //This is necesarry to stop TS from complaining
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
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