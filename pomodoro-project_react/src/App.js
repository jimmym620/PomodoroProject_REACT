import "./App.scss";
import Session from "./Session";
import TaskList from "./TaskList";
import SessionHistory from "./SessionHistory";
import CurrentTime from "./CurrentTime";
import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([]);
    const getTasks = (list) => {
        setTasks(list);
        console.log(tasks);
    };
    return (
        // Header
        <>
            <header>
                <h1>Quick Tomato</h1>
                <h2>A simple pomodoro timer</h2>
                <button onClick={getTasks}>Get tasks</button>
                {/* navbar */}
            </header>
            <main>
                <CurrentTime />
                <div className="main-container">
                    <Session />
                    <TaskList sendTasks={getTasks} />
                    <SessionHistory />
                </div>
            </main>
        </>
    );
}

export default App;
