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
import NotFound from "../components/NotFound"
import Error from "../components/Error"

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
                    errorElement={<Error />}
                    loader={quizLoader}
                />
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    )

    return <RouterProvider router={router} />
}

export default App
