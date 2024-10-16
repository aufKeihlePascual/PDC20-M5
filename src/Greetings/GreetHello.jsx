import React from "react";
import Greet from "./Greet";

function GreetHello(){
    return (
        <div>
            <Greet name="Alice"/>
            <Greet name="Bob"/>
            <Greet name="Charlie"/>
            <Greet name="John"/>
        </div>

    );
}

export default GreetHello;