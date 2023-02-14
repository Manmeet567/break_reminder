import React, {useState, useEffect} from 'react'

function ClockHeader({minutes, round, seconds, forest}) {

    let [enableMusic, setEnableMusic] = useState(false);
    const [music, setMusic] = useState(null);

    useEffect(() => {
        if (!music) {
          setMusic(new Audio(forest));
        } else {
            music.loop = true;
            enableMusic ? music.play() : music.pause();
        }
      }, [enableMusic, forest, music]);


    function toggleMusic() {
        setEnableMusic(!enableMusic);
        console.log(enableMusic)
    }


  return (
    <div className="clockHeader">

                <div className="roundInfo">
                    <div className="round" style={{
                        display:'flex',
                        flexDirection:'column', 
                        alignItems:'center'
                    }}>
                        <p>Round</p>
                        <b><p style={{
                            backgroundColor:'#fff',
                            padding:'10px',
                            color:'#070C15',
                            borderRadius:'20px',
                            marginTop:'10px',
                            fontFamily:'Verdana, Geneva, Tahoma, sans-serif'
                        }}>{round < 9 ? '0' + round : round}</p></b>
                    </div>
                </div>

                <div className="card">
                    <div className="card2">
                        <div className="minutes">
                            <p>{minutes <= 9 ? '0'+ minutes : minutes}</p>
                            <p>Mins</p>
                        </div>
                        <div className="colon">
                            <p>:</p>
                        </div>
                        <div className="seconds">
                            <p>{seconds <= 9 ? '0'+seconds : seconds}</p>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>

                <div className="music">
                    <div className="enableMusic" style={{display:'flex', flexDirection:'column', alignItems:'center' }}>
                        <p>Enable Music?</p>
                        <input type="checkbox" id="switch" />
                        <label htmlFor="switch" onClick={toggleMusic} style={{marginTop:'15px'}}>Toggle</label>
                    </div>
                </div>
                
            </div>
  )
}

export default ClockHeader