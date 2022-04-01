import React, {useState} from "react";

export default function Counter(){
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    let [count, setCount] = useState(0);
    function plus(){
        setCount(prevCount=>prevCount+1)
    }
    
    function minus(){
        setCount(prevCount=>prevCount-1)
    }
     return (
        <div className="counter">
            <button className="counter--minus" onClick={minus}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={plus}>+</button>
        </div>
    )
}