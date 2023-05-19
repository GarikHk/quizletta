import React, { Suspense } from "react"
import {
    useLoaderData,
    defer,
    Await
} from "react-router-dom"
import getQuiz from "../utils/getQuiz"
import shuffleArray from "../utils/shuffleArray"
import { decode } from 'html-entities'
import Question from "./Question"

export function loader({ request }) {
    const settings = new URL(request.url).search
    return defer({ questions: getQuiz(settings) })
}

export default function Quiz() {
    const dataPromise = useLoaderData()

    function resolvedQuiz(quizArr) {
        const question = quizArr
            .map((quest, index) => {
                const answers = shuffleArray([...quest.incorrect_answers, quest.correct_answer])

                return (
                    <Question quest={quest} answers={answers} key={index} />
                )
            })

        return question
    }

    return (
        <Suspense fallback={<h3 className="loading">Loading...</h3>}>
            <Await resolve={dataPromise.questions}>
                {resolvedQuiz}
            </Await>
        </Suspense>
    )
}