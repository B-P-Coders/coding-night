import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/word.module.css";

export default function WordCouter() {
  const wordCount = useRef(null);
  const characterCount = useRef(null)
  const countTarget = useRef(null)
  function update() {
    const text = wordCount.current.value
    console.log(text)
    wordCount.current.innerText = text.split(" ").length()
    characterCount.current.innerText = wordCount.replace(" ", "").split("").length()
  }
  return (
    <Layout>
    <div className="uiInputContainer">
      <h2>Word Count</h2>
      <label className="uiFormInput-container">
        <textarea
          className="uiFormInput"
          ref={countTarget}
          onChange={update}
        >
        </textarea>
        <span className="formInputLabel">Message</span>
      </label>
      <p aria-live="polite">
        <strong>
          <span id="wordCount" ref={wordCount}>0</span> words
        </strong>{" "}
        |{" "}
        <strong>
          <span id="characterCount" ref={characterCount}>0</span> characters
        </strong>
      </p>
    </div>
    </Layout>
  );
}
