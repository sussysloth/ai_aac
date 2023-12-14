"use client";
import React from 'react'

//prop is a function that's in the app.js file that removes last element of sentence
const BackSpace = (props) => {

    const divStyle = {
        padding: '5px'
    }

  return (
    <div style={divStyle} onClick={() => props.remove()}>
        {/* backspace icon image */}
        <img src="/backspace.png" alt="Backspace" width="60" height="60" />
    </div>
  )
}

export default BackSpace