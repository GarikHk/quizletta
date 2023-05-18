import React from "react"
import {
    Form,
    useNavigation,
    redirect
} from "react-router-dom"

export async function action({ request }) {
    const formData = await request.formData()
    const amount = formData.get("amount")
    const category = formData.get("category")
    const difficulty = formData.get("difficulty")

    let pathname = `quiz/?amount=${amount}`
    if(category !== "any") pathname += `&category=${category}`
    if(difficulty !== "any") pathname += `&difficulty=${difficulty}`

    return redirect(pathname)
}

export default function Settings() {
    const navigation = useNavigation()

    return (
        <div className="title">
            <h1 className="settings-title">Quizzletta</h1>
            <Form
                method="post"
                className="settings-form"
            // replace
            >
                <div className="settings-amount">
                    <label htmlFor="amount">Select Amount</label>
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        className="settings-params"
                        min="1"
                        max="50"
                        defaultValue="10"
                    />
                </div>

                <div className="settings-cat-diff">
                    <div className="settings-category">
                        <label htmlFor="category">Select Category</label>
                        <select name="category" className="settings-params" id="category" defaultValue="any">
                            <option value="any">Any Category</option>
                            <option value="9">General Knowledge</option>
                            <option value="10">Entertainment: Books</option>
                            <option value="11">Entertainment: Film</option>
                            <option value="12">Entertainment: Music</option>
                            <option value="13">Entertainment: Musicals & Theatres</option>
                            <option value="14">Entertainment: Television</option>
                            <option value="15">Entertainment: Video Games</option>
                            <option value="16">Entertainment: Board Games</option>
                            <option value="17">Science & Nature</option>
                            <option value="18">Science: Computers</option>
                            <option value="19">Science: Mathematics</option>
                            <option value="20">Mythology</option>
                            <option value="21">Sports</option>
                            <option value="22">Geography</option>
                            <option value="23">History</option>
                            <option value="24">Politics</option>
                            <option value="25">Art</option>
                            <option value="26">Celebrities</option>
                            <option value="27">Animals</option>
                            <option value="28">Vehicles</option>
                            <option value="29">Entertainment: Comics</option>
                            <option value="30">Science: Gadgets</option>
                            <option value="31">Entertainment: Japanese Anime & Manga</option>
                            <option value="32">Entertainment: Cartoon & Animations</option>
                        </select>
                    </div>

                    <div className="settings-difficulty">
                        <label htmlFor="difficulty">Selecet Difficulty</label>
                        <select name="difficulty" className="settings-params" id="difficulty" defaultValue="any">
                            <option value="any">Any Difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                </div>

                <button
                    disabled={navigation.state === "submitting"}
                >
                    {navigation.state === "submitting"
                        ? "Starting..."
                        : "Start Quiz"
                    }
                </button>
            </Form>
        </div>
    )
}