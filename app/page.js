"use client"
import { useState , useEffect } from 'react';

import AppCSS from './App.module.css';
import SentenceBar from './components/SentenceBar';
import GPTbar from './components/GPTbar';

export default function Home() {

//variables useState


const [selectedWords, setSelectedWords] = useState(["I", "love", "you"]); //the words the user picked

//the gpt-generated sentence
const [sentence, setSentence] = useState('Dummy GPT text');

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

  const GPTtextToSpeech = () => {
    let speaker = new SpeechSynthesisUtterance(sentence);
    window.speechSynthesis.speak(speaker);
  }

  const generateSentence = () => {
    //TODO
  }

  return (
    
      <>
          <SentenceBar selectedWords={selectedWords} func={doNothing} backFunc={removeLastWord} clearFunc={clearEverything} speechFunc={textToSpeech}/>
          <GPTbar generatedSentence={sentence} genFunc={generateSentence} speakFunc={GPTtextToSpeech}></GPTbar>

          {/* NOW FOR THE LITTLE BLACK BAR SEPARATING THE "OUTPUTS" FROM THE WORDSBOX*/}

          <div className={AppCSS.topBar}>
                <h>TurboTalk</h>
          </div>
      </>

  );
}
