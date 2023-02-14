
function StartButton({ playButton, startTimer}) {

  const playStyles = {
    backgroundColor:'#fff',
    padding:'10px',
    textAlign:'center',
    width:'80px',
    height:'80px',
    display:'flex',
    borderRadius:'50%',
    border:'none',
    outline:'none',
    cursor:'pointer',
    justifyContent:'center',
    alignItems:'center'
};


  return (
    // <footer style={{
    //     width:'100%',
    //     height:'100%',
    //     marginTop:'30px'
    //   }}>
      <div className="startButton" style={{
        display:'flex',
        justifyContent:'center'
      }}>
        <button style={playStyles} onClick={startTimer}>

            <img src="play.png" className={playButton ? 'playbtn playActive' : 'playbtn'} height="50px" alt="button"/>
            <img src="pause.png" className={playButton ? 'pausebtn' : 'pausebtn pauseActive'} height="50px" alt="button"/>

        </button>

      </div>

    //   <div className="devInfo" style={{
    //     width:'100%',
    //     height:'100%',
    //     backgroundColor:'#fff',
    //     borderTopLeftRadius:'40px',
    //     borderTopRightRadius:'40px',
    //     color:'#070C15',
    //     display:'flex',
    //     padding:'0 40px',
    //     justifyContent:'center'
    //   }}>
    //     <p>Web app by Manmeet Singh </p>
    //   </div>
    // </footer>
  )
}

export default StartButton