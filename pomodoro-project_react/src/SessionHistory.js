import React from "react";
import { useState, useEffect } from "react";
import historyTask from "./historyTask,js";
import Tasks from "./Tasks";

const getLocalStorage = () => {
    let list = localStorage.getItem("pomodoro-task-list");
    if (list) {
        // console.log(JSON.parse(localStorage.getItem("pomodoro-task-list")));
        return JSON.parse(localStorage.getItem("pomodoro-task-list"));
    } else {
        return [];
    }
};

const SessionHistory = ({ completion, setCompletion }) => {
    // copy the incoming array and use the copy
    const [taskStorageList, setTaskStorageList] = useState(getLocalStorage());
    const historyArray = [];
    useEffect(() => {
        setTaskStorageList(getLocalStorage);
    }, [completion]);

    const checkForDuplicates = (item) => {
        if (!historyArray.includes(item.id)) {
            historyArray.push(item);
            localStorage.setItem(
                "pomodoro-history",
                JSON.stringify(historyArray)
            );
        }
    };

    const loopLocalStorage = () => {
        taskStorageList.forEach((item) => {
            const { status } = item;
            if (status === "complete") {
                setCompletion(false);
                return item;
            }
        });
    };

    return (
        <section className="SessionHistory main-section">
            <h1>Session history component</h1>

            <section>
                <div className="histTasks">
                    {taskStorageList.map((item) => {
                        const { id, title, status } = item;
                        if (status === "complete") {
                            setCompletion(false);
                            checkForDuplicates(item);

                            return (
                                <article key={id} className="histTask-item">
                                    <p>
                                        {title}
                                        {status}
                                    </p>
                                </article>
                            );
                        } else return null;
                    })}
                </div>
            </section>
        </section>
    );
};

export default SessionHistory;
