import React, {useRef, useState} from 'react'
import * as styles from "../styles/word.module.css"

const WordCount = () => {
    let countTarget = useRef(null).current;
    
    
    return (
        <div className="uiInputContainer">
            <h2>Word Count</h2>
            <label className="uiFormInput-container">
                <textarea className="uiFormInput" id="wordCountInput" ref={countTarget}></textarea>
                <span className="formInputLabel">Message</span>
            </label>
            <p aria-live="polite"><strong><span id="wordCount">0</span> words</strong> | <strong><span id="characterCount">0</span> characters</strong></p>
        </div>
    )
}

export default WordCount
