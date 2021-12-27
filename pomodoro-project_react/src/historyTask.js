import React from "react";

const historyTask = ({ histStorage }) => {
    return (
        <div className="history-task-list">
            {histStorage.map((task) => {
                const { id, title, status } = task;
                return (
                    <article key={id} className="history-item">
                        <p>{status}</p>
                        <p className="hist-task-title">{title}</p>
                    </article>
                );
            })}
        </div>
    );
};

export default historyTask;
