import React from "react";
import EventonClick from "./EventonClick";
import KeyboardEvent from "./KeyboardEvent";
import MouseEvent from "./MouseEvent";

function MainEvent() {
    return (
        <div>
            <EventonClick/>
            <KeyboardEvent/>
            <MouseEvent/>
        </div>
    );
}

export default MainEvent;