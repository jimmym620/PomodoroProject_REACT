import React from "react";

const HistoryTask = ({ histStorage }) => {
    return (
        <div className="history-task-list">
            {histStorage.map((task) => {
                const { id, title, status } = task;
                return (
                    <article key={id} className="history-item">
                        <p className="hist-task-title">{title}</p>
                        <div className="btn-container">
                            <button>Remove</button>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default HistoryTask;
