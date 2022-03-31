import { useState } from "react";

export default function NonUI(){
    const result = useState("No");
    function resultClicked() {
        console.log(result);
    }
    
    return (
        <div>
            <h1>Is state important to know?</h1>
            <div>
                <h2 onClick={resultClicked}>{result[0]}</h2>
            </div>
        </div>
    )
}