import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Timer = ({timeLeft, totalTime}) => {
    const percentage = (timeLeft / totalTime) * 100;
    console.log(percentage);
  return (
    <div className='w-20 h-20'>
        <CircularProgressbar
        styles={buildStyles({
            textSize : "28px",
            pathColor : "#10b981",
            textColor : "#ef4444",
            trailColor : "#e5e7eb"
        })} 
        value={percentage} text={`${timeLeft}s`} />


    </div>
  )
}

export default Timer