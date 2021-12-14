import React, { Component } from "react";
import { useState, useEffect } from "react";
const CurrentTime = () => {
    const [date, setDate] = useState(new Date());

    const refreshClock = () => {
        setDate(new Date());
    };

    useEffect(() => {
        const timerID = setInterval(refreshClock, 1000);
        return () => clearInterval(timerID);
    }, []);

    return (
        <div className="current-time">
            <h2>Current Time</h2>
            <h3>{date.toLocaleTimeString()}</h3>
        </div>
    );
};

export default CurrentTime;

// Thanks to https://medium.com/programming-essentials/how-to-create-a-digital-clock-with-react-hooks-aa30f76cfe3f
