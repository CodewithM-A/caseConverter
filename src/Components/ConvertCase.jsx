import React from 'react'
import { useState } from 'react';
import Buttons from './Buttons';


function ConvertCase() {
    
  const [text, setText] = useState('');
  const [counts, setCounts] = useState({ characters: 0, words: 0, sentences: 0, lines: 0 })

  const UPPERCASE = () => {
    setText(text.toUpperCase());
  }
  const toLowerCase = () => {
    setText(text.toLowerCase());
  }
  const toSentenceCase = () => {
    let sentenceCase = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(sentenceCase);
  }
  const TitleCase = () => {
    let titleCased = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setText(titleCased);
  }
  const updateCounts=()=>{
    const characters = text.length;
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const sentences = text.split(/[.!?]/).filter(Boolean).length;
    const lines = text.split(/\n/).filter(Boolean).length;

    setCounts({characters,words,sentences,lines})
  }
 
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    updateCounts(newText);
  };
  return (
    <>
    <div className="container min-h-[400px] bg-gray-600 text-white m-auto p-3 sm:p-6 lg:p-10">
        <textarea  value={text} onChange={handleTextChange} className=' w-full bg-gray-700 p-3 rounded-lg resize-none' placeholder='Type or Paste Your Content here....' cols="20" rows="10"></textarea>
        <div className="btn-container flex gap-2 mt-2 flex-wrap justify-center sm:justify-start">
          <Buttons label="Sentence case" handleClick={toSentenceCase} />
          <Buttons label="UPPERCASE" handleClick={UPPERCASE} />
          <Buttons label="lowercase" handleClick={toLowerCase} />
          <Buttons label="Title Case" handleClick={TitleCase} />
          <Buttons label="Captilized Case" />
          <Buttons label="inVeRsE CaSe" />
          <Buttons label="Download Text" />
          <Buttons label="Copy To Clipboard" />
          
        </div>
        <div className="row counts mt-4 text-center sm:text-left">
          Character Count: 
          <span>{counts.characters}</span> | 
          Word Count: <span>{counts.words}</span> |
           Sentence Count: <span>{counts.sentences}</span> |
            Line Count: <span>{counts.lines}</span>

        </div>
      </div>


    </>

  )
}

export default ConvertCase