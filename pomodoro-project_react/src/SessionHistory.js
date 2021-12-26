import React from "react";
import { useState, useEffect } from "react";
import historyTask from "./historyTask,js";
import Tasks from "./Tasks";

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
    const testFunc = () => {
        for (const [key, value] of Object.entries(getLocalStorage())) {
            if (value.status === "complete") {
                if (histStorage.keys.length === 0) {
                    setHistStorage([value]);
                } else if (!histStorage.some((item) => item.id === value.id)) {
                    setHistStorage([...histStorage, value]);
                }
            }
            localStorage.setItem(
                "pomodoro-history",
                JSON.stringify(histStorage)
            );
        }
    };
    useEffect(() => {
        testFunc();
        // getLocalStorage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [completion, histStorage]);

    return (
        <section className="SessionHistory main-section">
            <h1>Session history component</h1>

            <section>
                <div className="histTasks">
                    <button onClick={testFunc}>GET</button>
                    {/* {histStorageList.map((item) => {
                        const { id, title, status } = item;
                        if (status === "complete") {
                            setCompletion(false);
                            loopLocalStorage();

                            return (
                                <article key={id} className="histTask-item">
                                    <p>
                                        {title}
                                        {status}
                                    </p>
                                </article>
                            );
                        } else return null;
                    })} */}
                </div>
            </section>
        </section>
    );
};

export default SessionHistory;
