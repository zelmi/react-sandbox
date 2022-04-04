import React, {useState} from "react";
import Count from "./Count";

export default function Counter(){
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
                {/* <h1>{count}</h1> */}
                <Count
                count = {count}
                />
            </div>
            <button className="counter--plus" onClick={plus}>+</button>
        </div>
    )
}