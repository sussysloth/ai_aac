"use client"

import React from 'react';
import FolderCSS from './Folder.module.css';
import WordCard from './WordCard.js';

const Folder = ({ folderName, contents, isOpen, folderClick , wordFunc}) => {

    try {
      return (
        <div className={FolderCSS.big}>
          <div className={FolderCSS.folder} onClick={folderClick}>
          <img src={`/${folderName}.png`} alt={folderName}/>
          <h>
            {folderName} {isOpen ? '[-]' : '[+]'}
          </h>
          </div>
          {/*  If isOpen, render the contents.map stuff  */}
    
          {isOpen && (
            <div className={FolderCSS.contents}>
              {contents.map((word, index) => {
    
              return (
                <WordCard key={index} word={word} clickFunc={() => wordFunc(word)} wordCardClass = "larger"/>
              )
            })}
            </div>
          )}
        
        </div>
      )
  
    } catch (error) {
      return (
        <div className={FolderCSS.big}>
          <div className={FolderCSS.folder} onClick={folderClick}>
    
          <h>
            {folderName} {isOpen ? '[-]' : '[+]'}
          </h>
          </div>
          {/*  If isOpen, render the contents.map stuff  */}
    
          {isOpen && (
            <div className={FolderCSS.contents}>
              {contents.map((word, index) => {
    
              return (
                <WordCard key={index} word={word} clickFunc={() => wordFunc(word)} wordCardClass = "larger"/>
              )
            })}
            </div>
          )}
        
        </div>
      )
    }
    
  }
  
  export default Folder