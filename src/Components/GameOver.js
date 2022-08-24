import React from 'react'

const GameOver=(props)=>{
    return(
    <div class='last-screen'>
        <h1 className='game-over'>Game Over</h1>
        <p className='final-score'>Final Score {props.score*10}/100</p>
        <button onClick={()=>props.playAgain()}>Play Again !</button>
    </div>
    )
}

export default GameOver