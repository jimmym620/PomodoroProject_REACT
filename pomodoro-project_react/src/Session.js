import React, { Component } from "react";
import { useState } from "react";
import Countdown from "react-countdown";

const Session = () => {
    const [sessionTime, setSessionTime] = useState("00:00:00");

    const createSession = () => {
        // call Countdown
    };

    return (
        <section className="main-section">
            <div className=" session">
                <h1>Start a session</h1>
                <h2>{sessionTime}</h2>
                <Countdown date={Date.now() + 100000} />
                <label htmlFor="sessionTime">Time:</label>
                <input type="text" name="sessionTime" />
                <div className="button-container">
                    <button className="sessionButtons" name="startStopBTN">
                        Start
                    </button>
                    <button className="sessionButtons">Edit time</button>

                    <button className="sessionButtons">Resume</button>
                    <button className="sessionButtons">End session</button>
                </div>
            </div>
        </section>
    );
};

export default Session;
