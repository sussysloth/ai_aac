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
            folderName: 'Quick Chat',
            contents: ["yes", "no", "hello", "goodbye", "good", "bad", "I can't speak", "thank you", "please", "favorite"]
        },
        {
            isFolder: true,
            folderName: "Time", 
            contents: ["now","today", "tomorrow", "yesterday", "afternoon", "morning", "night", "day", "week", "this week", "weekend", "next week", "this month", "hour", "minute"]
        },
        {
            isFolder: true,
            folderName: 'Pronouns',
            contents: ['I', "me", 'you', 'we', 'us', 'he', 'she', 'they', "y'all", "them", "my", "your"]
        },
        {
            isFolder: true,
            folderName: 'Actions',
            contents: ["be", "like","eat", "want", "am", "wear", "get", "go","hear","make","pick up", "put", "speak", "take", "wait","feed"]
        },

        {
            isFolder: true,
            folderName: 'Food',
            contents: ["hungry", "want", "dislike", "fruit", "vegetable", "meat", "pizza", "bread", "egg", "croissant", "cereal", "oatmeal", "pasta", "poultry", "beef", "fish", "salt", "tomato sauce", "sandwich", "toast", "cheese", "noodles"]
        },
        {
            isFolder: true,
            folderName: 'Snacks',
            contents: ["want", "ice cream", "chocolate", "chips", "cookies", "nuts", "cake", "yogurt", "popsicle", "pretzel"]
        },
        {
            isFolder: true,
            folderName: "Activities",
            contents: ["want", "bike", "basketball", "bowling", "video games", "watch TV","puzzle", "bathe", "work", "cook", "exercise", "climb", "run", "celebrate", "swim", "fish"]

        },
        {
            isFolder: true,
            folderName: 'Emotions',
            contents: ["happy", "sad", "angry", "bad", "good", "excited", "hot", "cold", "hungry", "relaxed", "scared", "surprised", "lost", "bored"]
        },
        {
            isFolder: true,
            folderName: "Body Parts",
            contents: ["foot", "arm", "leg"]
        },
        {
            isFolder: true,
            folderName: "Clothing", 
            contents: ["t-shirt", "pants", "shorts", "jeans", "jacket", "sweater", "hoodie", "tank top", "pyjamas"]
        },
        {
            isFolder: true,
            folderName: "Colors",
            contents: ["black", "white", "red", "yellow", "orange", "green", "dark", "light", "blue", "pink", "color"]
        },
        {
            isFolder: true,
            folderName: "People",
            contents: ["my", "your", "family", "grandpa", "grandma","mom", "dad", "sister", "brother", "baby", "child", "aunt", "uncle"]
        },
        {
            isFolder: true,
            folderName: "Describe", 
            contents: ["is", "not", "too","large", "small", "same", "old", "fast", "dirty", "loud", "broken", "wet"]
        },
        {
            isFolder: true,
            folderName: "Kitchen",
            contents: ["where", "need", "my", "fork", "spoon", "knife", "plate", "cup", "straw", "bowl", "stove", "fridge", "freezer"]
        },
        {
            isFolder: true,
            folderName: "School",
            contents: ["pencil", "teacher", "grade","class", "computer", "notebook", "backpack", "glue", "math", "english", "science", "computer science", "history"]
        },
        {
            isFolder: true,
            folderName: "Animals",
            contents: ["dog", "cat", "bunny","horse", "sheep", "llama"]
        },
        {
            isFolder: true,
            folderName: "Technology",
            contents: ["computer", "laptop", "charger", "battery", "camera", "headphones", "cellphone", "headphones", "iPad"]
        },
        {
            isFolder: true,
            folderName: "Weather",
            contents: ["rain", "sun", "snow", "thunder", "cloudy"]
        },
        {
            isFolder: true,
            folderName: "Places",
            contents: ["home", "store", "work", "bank", "outside", "inside", "gym", "garden", "school", "climbing gym"]
        },
        {
            isFolder: true,
            folderName: "Position",
            contents: ["in", "under", "over", "behind", "in front", "through", "between", "up", "down", "left", "right", "before", "after"]
        },
        {
            isFolder: true,
            folderName: 'Question',
            contents: ["who", "what", "where", "when", "why", "how", "how long", ]
        },
        
        {
            isFolder: true,
            folderName: "Numbers",
            contents: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
        },
        
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