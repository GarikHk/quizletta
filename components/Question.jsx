import React, { useState } from "react"
import { decode } from 'html-entities'
import shuffleArray from "../utils/shuffleArray"

export default function Question(props) {
    const { quest, answers } = props
    // const answers = shuffleArray([...quest.incorrect_answers, quest.correct_answer])
    const [selected, setSelected] = useState("")

    const clickHandler = (answer) => {
        setSelected(answer)
    }

    return (
        <div className="question">
            <p>{decode(quest.question)}</p>
            <div className="question-answers">
                {answers.map((ans, ind) => (
                    <button key={ind} className={selected === ans ? "selected" : ""} onClick={() => clickHandler(ans)}>{decode(ans)}</button>
                ))}
            </div>
            <div className="custom-br" />
        </div>
    )
}