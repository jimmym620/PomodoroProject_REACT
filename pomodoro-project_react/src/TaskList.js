import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TaskList = () => {
    const Tasks = [
        {
            id: 1,
            name: "Do homework",
        },
        {
            id: 2,
            name: "Study for physics test",
        },
        {
            id: 3,
            name: "Practice guitar",
        },
    ];

    return (
        <section className="TaskSection main-section">
            <h1>Task List component</h1>

            <ul className="TaskList">
                {Tasks.map(({ id, name }) => {
                    return (
                        <li key={id}>
                            <p>{name}</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default TaskList;
