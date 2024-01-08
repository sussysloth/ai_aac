import SentenceBarCSS from './SentenceBar.module.css';
import GenButton from './GenButton.js';
import Speech from './Speech.js';

const GPTbar = ({ generatedSentence , genFunc, speakFunc}) => {
    const buttonStyle = {
      filter: 'invert(100%)', // This inverts the image colors (white on GPT-bar)
    };
    return (
        
        <div className={SentenceBarCSS.gptbar}>
          <div>
            <h1>{generatedSentence}</h1>
          </div>

          
          
                
            <div className={SentenceBarCSS.buttons}>
          <GenButton genFunction={() => genFunc()}/>
          <Speech talk={() => speakFunc()} className={SentenceBarCSS.gptSpeech} style={buttonStyle}/>
          </div>

          
        </div>
  
      
    )
  }
  
  export default GPTbar