import React, { useState, useEffect } from "react";

import Tasks from "./Tasks.js";

const getLocalStorage = () => {
    let list = localStorage.getItem("pomodoro-task-list");
    if (list) {
        return JSON.parse(localStorage.getItem("pomodoro-task-list"));
    } else {
        return [];
    }
};

const TaskList = ({ setCompletion }) => {
    const [desc, setDesc] = useState("");
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!desc) {
            // show error
        } else if (desc && isEditing) {
            setList(
                list.map((task) => {
                    if (task.id === editID) {
                        return { ...task, title: desc };
                    }
                    return task;
                })
            );
            setDesc("");
            setEditID(null);
            setIsEditing(false);
            //show alert
        } else {
            //show alert
            const newTask = {
                id: new Date().getTime().toString(),
                title: desc,
                status: "current",
            };
            setList([...list, newTask]);
            setDesc("");
        }
    };

    const completeItem = (id) => {
        const specificTask = list.find((item) => item.id === id);
        specificTask.status = "complete";
        localStorage.setItem("pomodoro-task-list", JSON.stringify(list));
        setCompletion(true);
    };

    const removeItem = (id) => {
        //show alert
        setList(list.filter((task) => task.id !== id));
    };

    const editItem = (id) => {
        const specificTask = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setDesc(specificTask.title);
    };

    useEffect(() => {
        localStorage.setItem("pomodoro-task-list", JSON.stringify(list));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list]);

    return (
        <section className="TaskSection main-section">
            <h1>Your Tasks</h1>

            <form className="task-form" onSubmit={handleSubmit}>
                <h3>Add a task</h3>
                <div className="form-div">
                    <input
                        type="text"
                        className="task-input"
                        placeholder="Study English"
                        value={desc}
                        maxLength="200"
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <button type="submit" className="submit-btn">
                        {isEditing ? "Edit" : "Submit"}
                    </button>
                </div>
            </form>
            {list.length > 0 && (
                <Tasks
                    items={list}
                    removeItem={removeItem}
                    editItem={editItem}
                    completeItem={completeItem}
                />
            )}
        </section>
    );
};

export default TaskList;
