import React from 'react'
import Loader from './Loader'
const Score=(props)=>{
    return (
        <div className='loader-bar'>
            <span className='score'>Score:<span>{props.score}/{props.count*10}</span></span>
            <Loader isLoading={props.isLoading}/>
        </div>
    )
}
export default Score