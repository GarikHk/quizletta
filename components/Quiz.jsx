import React, { Suspense, useState } from "react"
import {
    useLoaderData,
    defer,
    Await
} from "react-router-dom"
import getQuiz from "../utils/getQuiz"
import shuffleArray from "../utils/shuffleArray"
import Question from "./Question"

export function loader({ request }) {
    const settings = new URL(request.url).search
    return defer({ questions: getQuiz(settings) })
}

export default function Quiz() {
    const dataPromise = useLoaderData()
    const [running, setRunning] = useState(true)

    function resolvedQuiz(quizArr) {
        const question = quizArr
            .map((quest, index) => {
                console.log(quest.correct_answer)

                return (
                    <Question quest={quest} state={running} key={index} />
                )
            })

        return (
            <div className="questions">
                {question}
                <button className="questions-check" onClick={() => setRunning(false)}>Check Answers</button>
            </div>)
    }

    return (
        <Suspense fallback={<h3 className="loading">Setting Up...</h3>}>
            <Await resolve={dataPromise.questions}>
                {resolvedQuiz}
            </Await>
        </Suspense>
    )
}