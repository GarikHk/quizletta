import React, { useEffect, useState } from "react"
import { decode } from 'html-entities'
import shuffleArray from "../utils/shuffleArray"

export default function Question(props) {
    const { quest, state, setStats } = props
    const [selected, setSelected] = useState({
        id: -1,
        answer: "",
    })
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const shuffledAnswers = shuffleArray([
            ...quest.incorrect_answers,
            quest.correct_answer,
        ]);
        setAnswers(shuffledAnswers);
    }, [quest]);

    useEffect(() => {
        if(!state && selected.answer === quest.correct_answer) setStats(prev => prev + 1)
    }, [state])

    return (
        <div className="question">
            <p>{decode(quest.question)}</p>
            <div className="question-answers-box">
                {answers.map((ans, ind) => (
                    <button
                        disabled={!state}
                        key={ind}
                        className={
                            state
                                ? `question-answers ${selected.answer === ans ? "selected" : ""}`
                                : `checked-answers ${ans === quest.correct_answer
                                    ? "right" 
                                    : selected.id === ind ? "wrong" : ""
                                }`
                        }
                        onClick={() => setSelected(prev => ({ ...prev, answer: ans, id: ind }))}
                    >{decode(ans)}</button>
                ))}
            </div>
            <div className="custom-br" />
        </div>
    )
}