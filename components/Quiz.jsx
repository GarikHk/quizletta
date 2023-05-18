import React, { Suspense } from "react";
import {
    useLoaderData,
    defer,
    Await
} from "react-router-dom"
import getQuiz from "../utils/getQuiz";
import { decode } from 'html-entities';

export function loader({ request }) {
    const settings = new URL(request.url).search
    return defer({ questions: getQuiz(settings) })
}

export default function Quiz() {
    const dataPromise = useLoaderData()

    function resolvedQuiz(quizArr) {
        const question = quizArr
            .map((quest, index) => (
                <div key={index}>
                    <p>{decode(quest.question)}</p>
                </div>
            ))

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