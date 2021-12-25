import "./App.scss";
import Session from "./Session";
import TaskList from "./TaskList";
import SessionHistory from "./SessionHistory";
import CurrentTime from "./CurrentTime";
import { useState } from "react";

function App() {
    // true if item has been completed
    const [completion, setCompletion] = useState(false);

    return (
        // Header
        <>
            <header>
                <h1>Quick Tomato</h1>
                <h2>A simple pomodoro timer</h2>
                {/* navbar */}
            </header>
            <main>
                <CurrentTime />
                <div className="main-container">
                    <Session />
                    <TaskList setCompletion={setCompletion}/>
                    <SessionHistory completion={completion} setCompletion={setCompletion} />
                </div>
            </main>
        </>
    );
}

export default App;
