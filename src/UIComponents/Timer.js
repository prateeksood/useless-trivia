import React from 'react'

const Timer=(props)=>{
    if(isNaN(props.timeLeft))
    {
        return(
            <div className='timmer'>---</div>
        ) 
    }
    return(
        <div className='timmer'>{props.timeLeft}</div>
    )
}

export default Timer