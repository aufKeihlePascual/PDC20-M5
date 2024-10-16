import React, {useState} from "react";

function EventonClick() {
    
    const[inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log(event.target.value);
    }
    
    const handleEvent = (event) => {
        event.stopPropagation(); //this will stop the event from propagating any further
        console.log(`Event type: ${event.type}`);
        handleClick();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submission prevented")
    };

    const handleClick = () =>  {
        alert("Button Clicked!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" onChange={handleChange} />
                <button onClick = {handleEvent}>Click Me!</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default EventonClick;