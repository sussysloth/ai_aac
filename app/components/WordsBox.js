"use client"

import WordsBoxCSS from './WordsBox.module.css';
import Folder from './Folder.js';
import { useState } from 'react';
import WordCard from './WordCard.js';

const WordsBox = (props) => {
    const [openFolder, setOpenFolder] = useState(null);

    const handleFolderClick = (folderName) => {
        if (folderName === openFolder) {
            // Clicking an open folder should close it
            setOpenFolder(null);
          } else {
            // Clicking a closed folder should open it
            setOpenFolder(folderName);
          }
    };

    //it's called folders but it's really just tiles

    //TRUE = folder
    //FALSE = wordCard
    const folders = [
        {
            isFolder: false,
            wordDisplayed: 'yes'
        },
        {
            isFolder: false,
            wordDisplayed: 'no'
        },
        {
            isFolder: false,
            wordDisplayed: "help"
        },
        {
            isFolder: true,
            folderName: 'Pronouns',
            contents: ['I', "me", 'you', 'we', 'us', 'he', 'she', 'they', "y'all", "them"]
        },
        {
            isFolder: true,
            folderName: 'Question',
            contents: ["who", "what", "where", "when", "why", "how", "how long", ]
        },
        
        {
            isFolder: true,
            folderName: 'Food',
            contents: ["breakfast", "lunch", "dinner", "snack", "vegetable", "meat", "apple"]
        },
        {
            isFolder: true,
            folderName: 'Actions',
            contents: ["be", "eat", "want", "am", "wear", "get", "go","hear","make","pick up", "put", "speak", "take", "wait","feed"]
        },
        {
            isFolder: true,
            folderName: 'Emotions',
            contents: ["happy", "sad", "angry", "bad", "good", "excited", "hot", "cold", "hungry", "relaxed", "scared", "surprised", "lost", "bored"]
        },
        {
            isFolder: true,
            folderName: "Time", 
            contents: ["today", "tomorrow", "yesterday", "weekend", "afternoon", "morning", "night", "day", "week"]
        },
        {
            isFolder: true,
            folderName: "Numbers",
            contents: []
        },
        {
            isFolder: true,
            folderName: "Body Parts",
            contents: ["foot", "arm", "leg"]
        }
    ];

    return (
    <div className={WordsBoxCSS.container}>
        
        
            { openFolder === null ? ( //if there's no open folder, display like normal.  If there is an open folder, display open folder UI
                folders.map((data, index) => { 
                // its kinda like a for each, each bracket is a "data"

                            if(data.isFolder) {
                                

                                return ( //two return statements somehow works?!!
                
                                //do the image thing ASAP
                    
                                    <Folder 
                                        key={index} 
                                        folderName={data.folderName} 
                                        contents={data.contents}
                                        isOpen={data.folderName === openFolder} 
                                        folderClick={() => handleFolderClick(data.folderName)}
                                        wordFunc={props.func}
                                        wordClass = "larger"
                                    />
                                );

                            } else {
                                return (

                                    <WordCard key={index} word={data.wordDisplayed} clickFunc={props.func} wordCardClass = "larger"/>

                                );
                            }


            })
        ) : (
            
                    <Folder 
                        folderName={openFolder}
                        contents={folders.find((folder) => folder.folderName === openFolder)?.contents || []}
                        isOpen={true}
                        folderClick={() => handleFolderClick(openFolder)}
                        wordFunc = {props.func}
                    />
                
            )}
    </div>
    );
}
export default WordsBox;