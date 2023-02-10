import { useState,useEffect } from "react";
import forest from '../audio/forest-audio.mp3';
import breakAudio from '../audio/breakAudio.mp3';

function Clock() {

    let [seconds, setSeconds] = useState(0);
    let [minutes, setMinutes] = useState(0);
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
            
            if(minutes === 25 && status === 'work'){
                setStatus('break');
                setMinutes(0);
                setSeconds(0);
            }

            if(minutes === 5 && status === 'break'){
                setStatus('work');
                setMinutes(0);
                setSeconds(0);
                setRound(r => r+1)
            }

            return () => clearInterval(timer);
         
    }, [minutes,seconds, status])


    useEffect(() => {
        status ==='work' ? document.title = "Work Time" : document.title = "Break Time";

        const breakSong = new Audio(breakAudio);
        status === 'break' ? breakSong.play() : breakSong.pause()

    }, [status])

    // i want the song to play when status gets changed to break, but with this code in react it isn't playing, can you give a solution


     return (
        <div className="clock">
            <h2 className="round">Round {round}</h2>

            <h3 className="status">{status === 'work' ? 'Work' : 'Break'} Time</h3>

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

            <div className="song">
                <h1>Need some music?</h1>
                <audio src={forest} controls loop autoPlay />
            </div>

        </div>
     )
}

export default Clock;