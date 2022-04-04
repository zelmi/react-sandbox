import React, { useState } from "react"

export default function WelcomeHeader (props) {
     
    
     return (
         <header>
             <p>Current user: {props.user}</p>
         </header>
     )
}
