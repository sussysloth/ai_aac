"use client";
import React from 'react'


const Clear = (props) => {

    const divStyle = {
        padding: '5px'
    }

  return (
    <div style={divStyle} onClick={() => props.clear()}>
        <img src='/clear.png' alt="Clear" width="50" height="50" />
    </div>
  )
}

export default Clear