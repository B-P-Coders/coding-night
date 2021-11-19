import React, {useRef} from "react"

export default function TimeTable() {

    function fetchTimetable() {
      iframe.current.src = input.current.value
    }

    const input = useRef("input")
    const iframe = useRef("iframe")
    return
    (
        <input type="text" ref={input}>
        <input type="button" value="Pobierz plan">
        <iframe src="" frameborder="0" ref={iframe}></iframe>
    )
}


