"use client"
import { useState , useEffect } from 'react';
import { useCompletion } from "ai/react";
import { useRouter } from 'next/navigation';

import AppCSS from './App.module.css';
import SentenceBar from './components/SentenceBar';
import GPTbar from './components/GPTbar';
import WordsBox from './components/WordsBox';

export default function Home() {

const [selectedWords, setSelectedWords] = useState([]); //the words the user picked

//the gpt-generated sentence
const [sentence, setSentence] = useState('');

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
    let speaker = new SpeechSynthesisUtterance(completion);
    window.speechSynthesis.speak(speaker);
  }

  const [RunBool, setRunBool] = useState(false);

  const generateSentence = () => {
    console.log("inputted value: " + selectedWords.join(", "))
    setSentence(selectedWords.join(', '));
    setRunBool(true);
  }

  useEffect(() => {
    if(RunBool) {
      console.log("output value has been updated")
      complete(sentence); //figure out this part
    }
  }, [sentence]);

  const { complete, completion } = useCompletion({
    api: 'api/completion',
    onResponse: (res) => {
      console.log(res.status);
    }
  });

  return (
    
      <>
          <SentenceBar selectedWords={selectedWords} func={doNothing} backFunc={removeLastWord} clearFunc={clearEverything} speechFunc={textToSpeech}/>
          <GPTbar generatedSentence={completion} genFunc={generateSentence} speakFunc={GPTtextToSpeech}></GPTbar>

          {/* NOW FOR THE LITTLE BLACK BAR SEPARATING THE "OUTPUTS" FROM THE WORDSBOX*/}

          <div className={AppCSS.topBar}>
                <h>TurboTalk</h>
          </div>

          {/* NOW FOR THE WORDSBOX*/}

          <div className={AppCSS.container}>
            <WordsBox func={handleWordClick}/>
          </div>
      </>

  );
}
