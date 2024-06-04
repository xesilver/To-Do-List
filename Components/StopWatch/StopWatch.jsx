import styles from "./StopWatch.module.css"
import React, {useState,useEffect,useRef} from 'react'

function StopWatch(){

    const [isRunning,setIsRunning] = useState(false)
    const [elapsedTime,setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0)

    useEffect(() =>{
        if(isRunning){
            intervalIdRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTimeRef.current);
            },10);
        }

        return () =>{
            clearInterval(intervalIdRef.current);
        }
    },[isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){
        
        const minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        const seconds = Math.floor((elapsedTime / 1000 % 60));;
        const milliseconds = Math.floor(elapsedTime % 1000 / 10);
        
        return(`${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`)
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <div className = {styles.stopContainer}>
            <h1>Stop Watch</h1>
            <span>{formatTime()}</span>
            <br />
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
export default StopWatch;