import React, { useEffect, useState } from "react"
import { decode } from 'html-entities'
import shuffleArray from "../utils/shuffleArray"

export default function Question(props) {
    const { quest, state } = props
    const [selected, setSelected] = useState("")
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const shuffledAnswers = shuffleArray([
            ...quest.incorrect_answers,
            quest.correct_answer,
        ]);
        setAnswers(shuffledAnswers);
    }, [quest]);

    return (
        <div className="question">
            <p>{decode(quest.question)}</p>
            <div className="question-answers-box">
                {answers.map((ans, ind) => (
                    <button
                        disabled={!state}
                        key={ind}
                        className={`question-answers ${selected === ans ? "selected" : ""}`}
                        onClick={() => setSelected(ans)}
                    >{decode(ans)}</button>
                ))}
            </div>
            <div className="custom-br" />
        </div>
    )
}