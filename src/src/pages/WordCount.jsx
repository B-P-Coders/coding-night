import React, {useRef, useState} from 'react'
import * as styles from "../styles/word.module.css"

const WordCount = () => {
    var countTarget = useRef(null).current;
    var wordCount = useRef(null).current;
    var characterCount = useRef(null).current;
    var count = function() {
        var characters = countTarget.value;
        var characterLength = characters.length;
        var words = characters.split(/[\n\r\s]+/g).filter(function(word){
            return word.length;
        });
        wordCount.innerHTML = words.length;
        characterCount.innerHTML = characterLength;
    };
    count();
    window
    
    return (
        <div className="uiInputContainer">
            <h2>Word Count</h2>
            <label className="uiFormInput-container">
                <textarea className="uiFormInput" id="wordCountInput" ref={countTarget} onInput={(e) => e.target.matches("#wordCountInput")}></textarea>
                <span className="formInputLabel">Message</span>
            </label>
            <p aria-live="polite"><strong><span id="wordCount" ref={wordCount}>0</span> words</strong> | <strong><span id="characterCount" ref={characterCount}>0</span> characters</strong></p>
        </div>
    )
}

export default WordCount
