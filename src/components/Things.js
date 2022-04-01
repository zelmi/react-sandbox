import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default function Things() {
    let [thingsArray, setThingsArray]  = useState(["Thing 1", "Thing 2"]);
    
    function addItem() {
        setThingsArray(function(prevArray){
          return [...prevArray, `Thing `+prevArray.length]
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div id='add'>
            <button id='add_button' onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}