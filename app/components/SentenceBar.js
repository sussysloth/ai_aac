"use client";


import SentenceBarCSS from './SentenceBar.module.css';
import WordCard from './WordCard.js';
import Clear from './Clear.js';
import Speech from './Speech.js';
import BackSpace from './BackSpace.js';

/*
import Clear from './Clear.js';
import BackSpace from './BackSpace.js';
import Speech from './Speech.js';
*/

//selectedWords [] is an array of the words in the sentence bar
//func is the function when a wordCard is clicked
// backFunc is the function when the backspace is clicked
const SentenceBar = ({ selectedWords , func, backFunc, clearFunc, speechFunc}) => {

    return (
        <div className={SentenceBarCSS.bar}>
            { selectedWords.map((phrase, index) => {

                return (
                <WordCard key={index} word={phrase} clickFunc={() => func(phrase)} wordCardClass="card"/>
                )
            })}
            
            {/*Add a backspace word and a delete everything button*/}
            <div className={SentenceBarCSS.buttons}>

                <BackSpace remove={() => backFunc()} />
                <Clear clear={() => clearFunc()} />
                <Speech talk={() => speechFunc()}/>

                {/* 

                <BackSpace remove={() => backFunc()} />
                <Clear clear={() => clearFunc()} />
                <Speech talk={() => speechFunc()}/>  
                
                */}
                          
            </div>
    
        </div>
    )
}

export default SentenceBar