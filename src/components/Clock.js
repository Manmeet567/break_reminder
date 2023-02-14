import { useState,useEffect } from "react";
import forest from '../audio/forest-audio.mp3';
import breakAudio from '../audio/breakAudio.mp3';
import breakOver from '../audio/breakOver.mp3';
import ClockHeader from "./ClockHeader";
import InputFields from "./InputFields";

function Clock({playButton}) {

    let [seconds, setSeconds] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [workTime,setWorkTime] = useState(25);
    let [breakTime, setBreakTime] = useState(5);
    let [status,setStatus] = useState('work')
    let [round,setRound] = useState(1);
 

    useEffect(() => {

        let timer = setInterval(() => {
            setSeconds(s=>s+1);
            if(seconds === 59){
                setMinutes(m => m+1)
                setSeconds(0);
            }
        },1000)

           if(playButton){
            
            if(minutes >= workTime && status === 'work'){
                setStatus('break');
                setMinutes(0);
                setSeconds(0);
            }

            if(minutes >= breakTime && status === 'break'){
                setStatus('work');
                setMinutes(0);
                setSeconds(0);
                setRound(r => r+1)
            }

            status ==='work' ? document.title = `Work Time ${minutes <= 9 ? '0'+ minutes : minutes}:${seconds <= 9 ? '0'+seconds : seconds}` : document.title = `Break Time ${minutes <= 9 ? '0'+ minutes : minutes}:${seconds <= 9 ? '0'+seconds : seconds}`;

            return () => clearInterval(timer);
           }
           else{
            clearInterval(timer);
           }
           

    }, [minutes,seconds, status, playButton, workTime, breakTime])


    useEffect(() => {

        const breakSong = new Audio(breakAudio);
        status === 'break' ? breakSong.play() : breakSong.pause()

        const workSong = new Audio(breakOver);
        round > 1 && status === 'work' ? workSong.play() : workSong.pause()

    }, [status,round])


     return (
        <div className="clock">

            <ClockHeader minutes={minutes} round={round} seconds={seconds} forest={forest}/>


            <h3 className="status" style={{
                fontSize:'2.4em',
                marginTop:'20px',
                letterSpacing:'2px'
            }}>{status === 'work' ? 'Work' : 'Break'} Time</h3>

            {/* <div className="timerInfo">
                <p>Default Work time is <span style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>25:00</span> and Break Time is <span style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>05:00</span></p>
            </div> */}


            <InputFields workTime={workTime} setWorkTime={setWorkTime} breakTime={breakTime} setBreakTime={setBreakTime}/>

        </div>
     )
}

export default Clock;