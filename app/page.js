"use client"
import { useState , useEffect } from 'react';


import SentenceBar from './components/SentenceBar';


export default function Home() {

//variables useState


const [selectedWords, setSelectedWords] = useState(["I", "love", "you"]); //the words the user picked

  //functions to use

  const handleWordClick = (word) => { // add a word to selectedWords
    setSelectedWords([...selectedWords, word]);
  };

  const removeLastWord = () => { //backspace
    setSelectedWords(selectedWords.slice(0, -1));
  }

  const clearEverything = () => { //clear
    setSelectedWords([]);
  }

  const textToSpeech = () => { //speech for sentenceBar
    let sent = selectedWords.join(" ");
    let speaker = new SpeechSynthesisUtterance(sent);
    window.speechSynthesis.speak(speaker);
  }

  const doNothing = () => { //dummy placeholder to make Wordbox parameter happy
    //literally does nothing
  }

  return (
    

          <SentenceBar selectedWords={selectedWords} func={doNothing} backFunc={removeLastWord} clearFunc={clearEverything} speechFunc={textToSpeech}/>
  
  );
}
