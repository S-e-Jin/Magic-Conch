import React, { useState } from 'react';
import conch_answer from '../data/ConchAnswer';

export default function MainPage(){
    const [answer, setAnswer] = useState("Magic Conch");
    const MagicConch = () => {
        const randomValue = Math.floor(Math.random() * conch_answer.length);
        setAnswer(conch_answer[randomValue])
    }
    return (
        <div className="App">
            <div className="backGround"></div>
            <div className='conchWrap'>
                <img className="conch" src="/images/conch.png" alt="Conch" onClick={MagicConch} />
            </div>
            <div className="answerWrap">
                <p className="answer">{answer}</p>
            </div>
        </div>
    );
}