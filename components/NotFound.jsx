import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="not-found">
            <h3>Sorry, the page you were looking for was not found.</h3>
            <br />
            <Link to="/">Start a new game</Link>
        </div>
    )
}