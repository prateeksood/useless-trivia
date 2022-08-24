import React from 'react'
import FA from 'react-fontawesome'
const Timer=(props)=>{
    if(isNaN(props.timeLeft))
    {
        return(
            <div className='timmer'><FA name="clock-o" /> ---</div>
        ) 
    }
    else if(props.timeLeft<=10){
        return <div className='timmer less-time-left'><FA name="clock-o" spin/> {props.timeLeft}</div>
    }
    return(
        <div className='timmer'><FA name="clock-o" spin/> {props.timeLeft}</div>
    )
}

export default Timer