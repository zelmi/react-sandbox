import React, { useState } from "react"

export default function GoingOut() {
    let [isGoingOut, setIsGoingOut] = useState(false);
    function handleClick() {
        setIsGoingOut(prevState => !prevState)
    }

    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <button onClick={handleClick} className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </button>
        </div>
    )
}