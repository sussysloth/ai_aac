"use client";
import React from 'react'

const Speech = (props) => {

    const divStyle = {
        padding: '5px'
    }

  return (
    <div style={divStyle} onClick={() => props.talk()}>
        <img src='/speak.png' alt="Speak" width="50" height="50"/>
    </div>
  )
}

export default Speech