import React,{useState,useEffect} from 'react'
import Header from './UIComponents/Header'
import Timer from './UIComponents/Timer'
import Score from './UIComponents/Score'
import MainBody from './UIComponents/MainBody'
import GameOver from './UIComponents/GameOver'

const App=()=>{
    const [count,setCount]=useState(1);
    const [isLoading,setIsloading]=useState(true);
    const [isAnswered,setIsAnswered]=useState(false);
    const [score,setScore]=useState(0);
    const [timeLeft,setTimeLeft]=useState(NaN);
    const [question,setQuestion]=useState('');
    const [msg,setMsg]=useState('Choose an option');
    const [msgClass,setMsgClass]=useState('info');
    const [correct,setCorrect]=useState('');
    const [incorrect1,setIncorrect1]=useState('');
    const [incorrect2,setIncorrect2]=useState('');
    const [incorrect3,setIncorrect3]=useState('');
    const [options,setOptions]=useState([]);
    const [correctIndex,setCorrectIndex]=useState();
    const [buttonStyle,setButtonStyle]=useState([]);

    useEffect(()=>{
            fetch('https://opentdb.com/api.php?category=18&amount=1&type=multiple')
            .then(res=>res.json())
            .then(data=>{
                const result=data.results[0];
                setQuestion(decodeHTML(result.question));
                setCorrect(decodeHTML(result.correct_answer));
                setIncorrect1(decodeHTML(result.incorrect_answers[0]));
                setIncorrect2(decodeHTML(result.incorrect_answers[1]));
                setIncorrect3(decodeHTML(result.incorrect_answers[2]));
                setIsloading(false);
                setTimeLeft(30);
                setMsgClass('info');
                setMsg('Choose an option');
                setIsAnswered(false);
            })
            .catch(err=>{
                console.log(err);
            })
            const timmer=setInterval(()=>setTimeLeft(prev=>prev-1),1000);
             return(()=>clearInterval(timmer));
    },[count]);
   
    useEffect(()=>{
        let optionsArr=[];

        const createRandArr=(itemC,item2,item3,item4)=>{
            let index1=(Math.random()*(3)).toFixed();
            optionsArr[index1]=itemC;
            setCorrectIndex(index1);
            let index2=(Math.random()*(3)).toFixed();
            do{
                index2=(Math.random()*(3)).toFixed();
            }while(index2===index1);
            optionsArr[index2]=item2;
            let index3=(Math.random()*(3)).toFixed();
            do{
                index3=(Math.random()*(3)).toFixed();
            }while(index3===index1||index2===index3);
            optionsArr[index3]=item3;
            let index4=(Math.random()*(3)).toFixed();
            do{
                index4=(Math.random()*(3)).toFixed();
            }while(index4===index1||index4===index2||index4===index3);
            optionsArr[index4]=item4;
        }
        createRandArr(correct,incorrect1,incorrect2,incorrect3);
        setOptions(optionsArr);
        setButtonStyle([]);
        
    },[correct,incorrect1,incorrect2,incorrect3]);
    let decodeHTML = (html)=> {
        var txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };
    const handleAnswer=(selectedOption)=>{
        let styles=[];
        setIsloading(true);
        setIsAnswered(true);

        if(selectedOption===correct){
            setTimeLeft(NaN);
            setMsgClass('success');
            setMsg('Correct !');
            setScore(prev=>++prev);

        }else{
            setTimeLeft(NaN);
            setMsgClass('error');
            setMsg('Incorrect !');
            
        }
        // styles on click
        styles[correctIndex]={color:'green',borderColor:'green'}
        let index1=correctIndex;
        while(index1===correctIndex){
            index1=(Math.random()*(3)).toFixed();
        }
        styles[index1]={color:'red',borderColor:'red'}
        let index2=correctIndex;
        while(index2===correctIndex||index2===index1){
            index2=(Math.random()*(3)).toFixed();
        }
        styles[index2]={color:'red',borderColor:'red'}

        let index3=(Math.random()*(3)).toFixed();
        while(index3===correctIndex||index3===index1||index3===index2){
            index3=(Math.random()*(3)).toFixed();
        }
        styles[index3]={color:'red',borderColor:'red'}
        setButtonStyle(styles);

        setTimeout(()=>{
            setCount(prev=>prev+1);
        },3000);
    }
    if(timeLeft===0)
    {
        let styles=[];
        setIsloading(true);
        setIsAnswered(true);
        setTimeLeft(NaN);
        setMsgClass('error');
        setMsg('Time Ran Out !');
        // styles on timeOut
        styles[correctIndex]={color:'green',borderColor:'green'}
        let index1=correctIndex;
        while(index1===correctIndex){
            index1=(Math.random()*(3)).toFixed();
        }
        styles[index1]={color:'red',borderColor:'red'}
        let index2=correctIndex;
        while(index2===correctIndex||index2===index1){
            index2=(Math.random()*(3)).toFixed();
        }
        styles[index2]={color:'red',borderColor:'red'}

        let index3=(Math.random()*(3)).toFixed();
        while(index3===correctIndex||index3===index1||index3===index2){
            index3=(Math.random()*(3)).toFixed();
        }
        styles[index3]={color:'red',borderColor:'red'}
        setButtonStyle(styles);
        setTimeout(()=>{
        setCount(prev=>prev+1);
        },3000);
    }
    const playAgain=()=>{
        setCount(1);
        setScore(0);
    }

    if(count>10){
        return(<GameOver score={score} playAgain={playAgain}/>)
    }else{
        if(isAnswered){
            return(
                <div style={{backgroundColor:'rgb(9, 10, 12)',height:'100vh'}}>
                    <Header/>
                    <Timer timeLeft={timeLeft}/>
                    <Score score={score*10} count={count} isLoading={isLoading}/>
                    <MainBody 
                    isLoading={isLoading} 
                    question={question} 
                    options={options} 
                    correctOption={correct} 
                    handleAnswer={handleAnswer} 
                    msg={msg}
                    count={count}
                    msgClass={msgClass}
                    correctIndex={correctIndex}
                    buttonStyle={buttonStyle}
                    />
                </div> 
            )
            
        }else{
            return(
                <div style={{backgroundColor:'rgb(9, 10, 12)',height:'100vh'}}>
                    <Header/>
                    <Timer timeLeft={timeLeft}/>
                    <Score score={score*10} count={count} isLoading={isLoading}/>
                    <MainBody 
                    isLoading={isLoading} 
                    question={question} 
                    options={options} 
                    correctOption={correct} 
                    handleAnswer={handleAnswer} 
                    msg={msg}
                    count={count}
                    msgClass={msgClass}
                    correctIndex={correctIndex}
                    buttonStyle={buttonStyle}
                    />
                </div>
            )
        }
    }

    
}
    
export default App;