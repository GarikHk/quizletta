import React from "react"
import { useRouteError, Link } from "react-router-dom"

export default function Error() {
    const error = useRouteError()

    return (
        <div className="not-found">
            <h3>Error: {error.message}</h3>
            <br />
            <Link to="/">Start a new game</Link>
        </div>
    )
}