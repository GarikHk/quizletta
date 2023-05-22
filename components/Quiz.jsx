import React, { Suspense, useState } from "react"
import {
    useNavigate,
    useLoaderData,
    defer,
    Await
} from "react-router-dom"
import getQuiz from "../utils/getQuiz"
import Question from "./Question"

export function loader({ request }) {
    const settings = new URL(request.url).search
    return defer({ questions: getQuiz(settings) })
}

export default function Quiz() {
    const navigate = useNavigate()
    const dataPromise = useLoaderData()
    const [running, setRunning] = useState(true)
    const [stats, setStats] = useState(0)

    function resolvedQuiz(quizArr) {
        const question = quizArr
            .map((quest, index) => {
                return (
                    <Question quest={quest} state={running} setStats={setStats} key={index} />
                )
            })

        return (
            <div className="questions">
                {question}
                {!running && <p className="stats">{`You scored ${stats}/${quizArr.length} correct answers`}</p>}
                <button className="questions-check" onClick={() => running ? setRunning(false) : navigate("/")}>{running ? "Check Answers" : "Play again"}</button>
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