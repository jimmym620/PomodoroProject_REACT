import React, { Component } from "react";

const Tasks = ({ items, removeItem, editItem }) => {
    return (
        <div className="task-list">
            {items.map((item) => {
                const { id, title } = item;
                return (
                    <article key={id} className="task-item">
                        <p className="taskTitle">{title}</p>
                        <div className="btn-container">
                            <button
                                type="button"
                                className="edit-btn"
                                onClick={() => editItem(id)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="del-btn"
                                onClick={() => removeItem(id)}
                            >
                                Delete
                            </button>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Tasks;
