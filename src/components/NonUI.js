import React from "react";

export default function NonUI(){
    //////////////////////////
    function greeting (name){
        const date = new Date();
        const hours = date.getHours();
        const minute = date.getMinutes();
        console.log((`${hours}, ${minute}`));
      }
      greeting("Bob");
    /////////////////////////
    // const result = useState("maybe");
    //we wont be using the above bc useState returns an arrayy with the 
    //variable useState took in and a function. So we destructure the array
    //and result is now just the variable
    let [isImportant, setIsImportant] = React.useState("maybe");
    function handleClick() {
        setIsImportant("no");
        console.log(isImportant);
    }
    
    return (
        <div>
            <h1>Is state important to know?</h1>
            <div>
                <h2 onClick={handleClick}>{isImportant}</h2>
            </div>
        </div>
    )
}