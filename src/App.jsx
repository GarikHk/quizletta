import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom"

// COMPONENTS
import Layout from '../components/Layout'
import Settings, { action as settingsAction } from '../components/Settings'
import Quiz, {loader as quizLoader} from "../components/Quiz"

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout />} >
                <Route
                    index
                    element={<Settings />}
                    action={settingsAction}
                />
                <Route
                    path="quiz"
                    element={<Quiz />}
                    loader={quizLoader}
                />
            </Route>
        )
    )

    return <RouterProvider router={router} />
}

export default App
