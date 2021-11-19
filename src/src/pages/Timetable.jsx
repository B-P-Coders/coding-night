import React from "react"
import { useRef } from "react"



export default function TimeTable() {
    const input = useRef("input")
    const iframe = useRef("iframe")
    return
    (
        <input type="text" ref={input}>
        <input type="button" value="Pobierz plan">
        <iframe src="" frameborder="0" ref={iframe}></iframe>
    )
}

function fetchTimetable() {
    iframe.current.src = input.current.value
}