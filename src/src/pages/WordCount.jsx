import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/word.module.css";

export default function WordCouter() {
  const countTarget = useRef(null)
  const [characterCount, setCharacterCount] = useState()
  const [wordCount, setWordCount] = useState()
  function update() {
    const text = countTarget.current.value
    setWordCount(text.split(" ").replaceAll("  ", " ").length || 0)
    setCharacterCount(text.replaceAll(" ", "").replaceAll("\n", "").split("").length || 0)
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
          <span id="wordCount">{wordCount}</span> words
        </strong>{" "}
        |{" "}
        <strong>
          <span id="characterCount">{characterCount}</span> characters
        </strong>
      </p>
    </div>
    </Layout>
  );
}
