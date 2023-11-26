"use client";
import Image from "next/image"
import React from 'react'
import buttonCSS from './Button.module.css';


const Clear = (props) => {
  return (
    <div className={buttonCSS.clear} onClick={() => props.clear()}>
        <Image src='/clear.png' alt="Clear" width="50" height="50" />
    </div>
  )
}

export default Clear