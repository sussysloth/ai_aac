"use client";

import cardCSS from './WordCard.module.css';

const WordCard = (props) => {

    try {
        
        return (
            <div className={`${cardCSS[props.wordCardClass]}`} onClick={() => props.clickFunc(props.word)}>
                <img src={`/${props.word}.png`} alt={props.word}/>
                <p>{props.word}</p>
            </div>
        );
    } catch (error) {
        // Handle the error, e.g., display a placeholder or error message
        return (
            <div className={`${cardCSS[props.wordCardClass]}`} onClick={() => props.clickFunc(props.word)}>
                <p>{props.word}</p>
            </div>
        );
    }
}

export default WordCard;