/* eslint-disable react-hooks/exhaustive-deps */
// Countdown template from https://aleksandarpopovic.com/Infinite-Pomodoro-App-in-React/

import React, { Component } from "react";
import { useState, useEffect } from "react";
import Message from "./Message";

const Session = () => {
    const [isPaused, setIsPaused] = useState(true);
    const [isEnded, setIsEnded] = useState(false);
    const [countActive, setCountActive] = useState(false);

    const [displayBreakMessage, setDisplayBreakMessage] = useState({
        show: true,
        msg: "",
        type: "",
        displayTime: 0,
    });
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(5);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);
            // if seconds are 0
            if (seconds === 0) {
                // if minutes are not 0
                if (minutes !== 0 && !isPaused) {
                    //decrease minutes by one, set seconds from 0 to 59
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
                // if minutes are also 0
                if (minutes === 0 && countActive) {
                    // both min and sec are 0, reset or start break timer
                    // showMessage(true, "success", "Session complete!");
                    clearInterval(interval);
                    showMessage(true, "", "Session complete", 3);
                    setCountActive(false);
                    setIsPaused(true);
                    return;
                }
            }

            // if seconds go negative
            if (seconds < 0) {
                setSeconds(0);
                return;
            }
            // if timer is paused
            else if (isPaused && countActive) {
                console.log("PAUSED");
                return;
            }
            // if seconds are not 0, just decrease seconds by 1
            if (!isPaused && seconds !== 0 && countActive) {
                setSeconds(seconds - 1);

                console.log(seconds + " isPaused: " + isPaused);
            }
        }, 1000);
    }, [seconds, isPaused, countActive]);

    const endSession = () => {
        setMinutes(0);
        setSeconds(0);
        setIsPaused(true);
        setCountActive(false);
    };

    const startPauseSession = () => {
        if (seconds === 0 && minutes === 0) {
            showMessage(true, "", "Must be at least 1 minute", 3.5);
        } else {
            setIsPaused(!isPaused);
            setCountActive(true);

            console.log(isPaused);
        }
    };

    const showMessage = (
        show = false,
        type = "",
        msg = "",
        displayTime = 0
    ) => {
        setDisplayBreakMessage({ show, type, msg, displayTime });
    };

    const handleSubmitMinutes = (e) => {
        e.preventDefault();
    };

    return (
        <section className="main-section">
            <div className=" session">
                <h1>Start a session</h1>
                <div className="message-display">
                    {displayBreakMessage.show && (
                        <Message
                            {...displayBreakMessage}
                            seconds={seconds}
                            removeMessage={showMessage}
                        />
                    )}
                </div>
                <div className="remaining-time">
                    <h1>
                        {timerMinutes}:{timerSeconds}
                    </h1>
                </div>

                {!countActive && (
                    <form className="time-form" onSubmit={handleSubmitMinutes}>
                        <label htmlFor="sessionTime">Minutes:</label>
                        <input
                            type="number"
                            max="60"
                            min="1"
                            onInput={(e) =>
                                (e.target.value = e.target.value.slice(0, 2))
                            }
                            name="sessionTime"
                            value={seconds}
                            onChange={(e) => setSeconds(e.target.value)}
                        />
                        {/* <button type="submit"> Submit</button> */}
                    </form>
                )}

                <div className="button-container">
                    <button
                        className="sessionButtons"
                        name="startStopBTN"
                        onClick={startPauseSession}
                    >
                        {isPaused ? "Start" : "Pause"}
                    </button>
                    {isPaused && countActive && (
                        <button className="sessionButtons" onClick={endSession}>
                            End this session
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Session;
