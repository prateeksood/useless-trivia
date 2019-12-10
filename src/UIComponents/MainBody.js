import React from 'react'
const MainBody=(props)=>{
    // console.log(props)
    return(
        <div >            
            <div className='question-card'>
                <div className='question'><span>Q.{props.count} </span><span>{props.question}</span></div><br/>
                
                <div className='options'>
                    <button 
                    disabled={props.isLoading} 
                    onClick={()=>props.handleAnswer(props.options[0])}
                    style={props.buttonStyle[0]}
                    >
                        {props.options[0]}
                    </button>
                    <button 
                    disabled={props.isLoading} 
                    onClick={()=>props.handleAnswer(props.options[1])}
                    style={props.buttonStyle[1]}
                    >
                        {props.options[1]}
                    </button>
                    <button 
                    disabled={props.isLoading} 
                    onClick={()=>props.handleAnswer(props.options[2])}
                    style={props.buttonStyle[2]}
                    >
                        {props.options[2]}
                    </button>
                    <button 
                    disabled={props.isLoading} 
                    onClick={()=>props.handleAnswer(props.options[3])}
                    style={props.buttonStyle[3]}
                    >
                        {props.options[3]}
                    </button>
                </div>
            </div>
            <div className={'message '+ props.msgClass}>{props.msg}</div>
        </div>
    )
}

export default MainBody