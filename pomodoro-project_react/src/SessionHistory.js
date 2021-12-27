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
        saveHistory();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [completion, histStorage]);

    return (
        <section className="SessionHistory main-section">
            <h1>Session history component</h1>

            <HistoryTask histStorage={histStorage} />
            <div className="histTasks">{histStorage.length}</div>
        </section>
    );
};

export default SessionHistory;
