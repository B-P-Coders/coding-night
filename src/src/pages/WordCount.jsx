import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/words.module.css";

export default function WordCouter() {
  const countTarget = useRef(null)
  const [characterCount, setCharacterCount] = useState(0)
  const [wordCount, setWordCount] = useState(0)
  function update() {
    const text = countTarget.current.value
    setWordCount(text.replaceAll("  ", " ").replaceAll("\n", " ").split(" ").length || 0)
    setCharacterCount(text.replace(" ", "").replaceAll("\n", " ").split("").length || 0)
  }
  return (
    <Layout>
    <div className={styles.uiInputContainer}>
      <h2>Word Count</h2>
      <label className={styles.uiFormInputContainer}>
        <textarea
          className={styles.uiFormInput}
          ref={countTarget}
          onInput={update}
        >
        </textarea>
        <span className={styles.formInputLabel}>Text</span>
      </label>
      <p aria-live="polite" className={styles.p}>
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
