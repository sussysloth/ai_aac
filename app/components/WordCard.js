"use client";

import cardCSS from './WordCard.module.css';

const WordCard = (props) => {

    try {
        const wordImage = require(`/${props.word}.png`);

        return (
            <div className={`${cardCSS[props.wordCardClass]}`} onClick={() => props.clickFunc(props.word)}>
                <img src={wordImage} alt={props.word}/>
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