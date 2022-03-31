function ClickEvents() {
    function handleClick() {
        // document.body.style.backgroundColor = "blue";
        console.log("heyyyyyyyyy");
    }
    
    /**
     * Add our new function to the button
     */
    
    return (
        <div className="container">
            <img onMouseEnter={handleClick} src="https://picsum.photos/640/360" />
            <button >Click me</button>
        </div>
    )
}

export default ClickEvents;