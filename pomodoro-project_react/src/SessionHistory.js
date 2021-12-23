import React, { Component } from "react";

const SessionHistory = ({ tasks }) => {
    // copy the incoming array and use the copy
    return (
        <section className="SessionHistory main-section">
            <h1>Session history component</h1>
            {console.log(tasks)}
            <section>
                {tasks.map((x) => {
                    return <p>{x.title}</p>;
                })}
            </section>
        </section>
    );
};

export default SessionHistory;
