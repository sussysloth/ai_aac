import React from 'react'
import SentenceBarCSS from './SentenceBar.module.css';

const GenButton = (props) => {
  return (
    <div className={SentenceBarCSS.genButton} onClick={() => props.genFunction()}>
        Generate
    </div>
  )
}

export default GenButton