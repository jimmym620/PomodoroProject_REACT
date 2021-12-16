/* eslint-disable react-hooks/exhaustive-deps */
// Countdown template from https://aleksandarpopovic.com/Infinite-Pomodoro-App-in-React/

import React, { Component } from "react";
import { useState, useEffect } from "react";
import Countdown from "react-countdown";

const Session = () => {
    const [countdown, setCountdown] = useState();
    const [isPaused, setIsPaused] = useState(true);

    const [displayMessage, setDisplayMessage] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(10);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);
            if (!isPaused) {
                //seconds are not 0, just decrease seconds by 1
                setSeconds(seconds - 1);
            }
            if (isPaused) {
                clearInterval(interval);
            }
            if (seconds === 0) {
                if (minutes !== 0) {
                    //decrease minutes by one, set seconds from 0 to 59
                    setSeconds(59);
                    setMinutes(minutes - 1);
                } else {
                    // both min and sec are 0, reset or start break timer
                    clearInterval(interval);
                    let minutes = displayMessage ? 10 : 5;
                    let seconds = 59;
                    setIsPaused(true);
                    setSeconds(seconds);
                    setMinutes(minutes);
                    // setDisplayMessage(!displayMessage);
                }
            }
        }, 1000);
    }, [seconds, isPaused]);

    const endSession = () => {
        setMinutes(0);
        setSeconds(0);
        setIsPaused(true);
    };

    const startPauseSession = () => {
        setIsPaused(!isPaused);
        console.log(isPaused);
    };

    const convertToMs = (minutes) => {
        const resultMS = minutes * 60000;
        return resultMS;
    };

    const handleSubmitMinutes = (e) => {
        e.preventDefault();
    };

    return (
        <section className="main-section">
            <div className=" session">
                <h1>Start a session</h1>
                <div className="message-display">
                    {displayMessage && (
                        <div>Break time! New session starting in:</div>
                    )}
                </div>
                <div className="remaining-time">
                    {/* <h3>Remaining time</h3> */}
                    {/* <h4>{countdown}</h4> */}
                    <h1>
                        {timerMinutes}:{timerSeconds}
                    </h1>
                </div>

                <form className="time-form" onSubmit={handleSubmitMinutes}>
                    <label htmlFor="sessionTime">Minutes per session:</label>
                    <input
                        type="number"
                        max="60"
                        min="0"
                        onInput={(e) =>
                            (e.target.value = e.target.value.slice(0, 2))
                        }
                        name="sessionTime"
                        value={minutes}
                        onChange={(e) => setMinutes(e.target.value)}
                    />
                    <button type="submit"> Submit</button>
                </form>
                <div className="button-container">
                    <button
                        className="sessionButtons"
                        name="startStopBTN"
                        onClick={startPauseSession}
                    >
                        Start/Pause
                    </button>
                    <button className="sessionButtons">Edit time</button>

                    <button className="sessionButtons">Resume</button>
                    <button className="sessionButtons" onClick={endSession}>
                        End session
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Session;
