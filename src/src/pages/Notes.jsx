import React, { useRef } from "react";
import Layout from "../components/Layout"
import styles from "../styles/notes.module.css"
import Header from '../components/Header'

export default function Notes()
{
    const text = useRef()
    return (
        <Layout>
          <Header value="Amazing place to save your notes"/>
            <div className={styles.main}>
                <textarea placeholder="Your Notes area" className={styles.area} cols="30" rows="10" ref={text}></textarea>
                <br />
                <button className={styles.btn} onClick={SaveNotes}>Save</button>
                <button className={styles.btn} onClick={LoadNotes}>Open recent</button>
            </div>
        </Layout>
    )
    function SaveNotes() {
        localStorage.setItem("notes", text.current.value)
    }
    function LoadNotes() {
        text.current.value = localStorage.getItem("notes")
    }
}
