import React, {useState} from "react";

function EventonClick() {
    
    const[inputValue, setInputValue] = useState('');

    const handleEvent = (event) => {
        console.log(`Event type: ${event.type}`);
        handleClick();
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log(event.target.value);
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