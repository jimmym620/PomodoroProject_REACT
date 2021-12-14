import React, { Component } from "react";

const Session = () => {
    return (
        <section className="session main-section">
            <h1>Start a session</h1>
            <h2>10:00:00</h2>
            <div className="button-container">
                <button className="sessionButtons">Edit time</button>
                
                <button className="sessionButtons">Pause </button>
                
                <button className="sessionButtons">Resume</button>
                <button className="sessionButtons">Restart</button>
            </div>
        </section>
    );
};

export default Session;
