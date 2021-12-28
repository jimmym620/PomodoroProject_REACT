import React from "react";
import HistoryTask from "./HistoryTask";
import { useState, useEffect } from "react";

const getLocalHistStorage = () => {
    let list = localStorage.getItem("pomodoro-history");
    if (list) {
        return JSON.parse(localStorage.getItem("pomodoro-history"));
    } else {
        return [];
    }
};

// =====================================================================================

const SessionHistory = ({ completion, setCompletion, getLocalStorage }) => {
    const [histStorage, setHistStorage] = useState(getLocalHistStorage());

    // console.log(getLocalStorage()[0]);

    // console.log(histStorage[0].id);
    // if (histStorage.some((item) => item.id !== value.id)) {
    //     alert("item doesnt exists");
    // }
    const saveHistory = () => {
        for (const [, value] of Object.entries(getLocalStorage())) {
            if (value.status === "complete") {
                if (!histStorage.some((item) => item.id === value.id)) {
                    setHistStorage([...histStorage, value]);
                }
            }
            setCompletion(false);
            localStorage.setItem(
                "pomodoro-history",
                JSON.stringify(histStorage)
            );
        }
    };
    useEffect(() => {
        if (completion) {
            saveHistory();
        }
        // saveHistory();
        localStorage.setItem("pomodoro-history", JSON.stringify(histStorage));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [completion, histStorage]);

    const removeHTask = (id) => {
        // delete histStorage[id];

        setHistStorage(histStorage.filter((item) => item.id !== id));
        // let localTasks = JSON.parse(localStorage.getItem("pomodoro-history"));
        // localTasks.filter((item) => item.id !== id);
        // localStorage.setItem("pomodoro-task-list", JSON.stringify(localTasks));
    };

    return (
        <section className="SessionHistory main-section">
            <h1>Your previous sessions</h1>

            <div className="histTasks">
                {histStorage.length > 0 && (
                    <HistoryTask
                        histStorage={histStorage}
                        removeHTask={removeHTask}
                    />
                )}
            </div>
        </section>
    );
};

export default SessionHistory;
