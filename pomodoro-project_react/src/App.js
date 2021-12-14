import "./App.css";
import Session from "./Session";
import TaskList from "./TaskList";
import SessionHistory from "./SessionHistory";
import CurrentTime from "./CurrentTime";

function App() {
    return (
        // Header
        <>
            <header>
                <h1>Quick Tomato</h1>
                {/* navbar */}
            </header>
            <main>
                <CurrentTime />
                <div className="main-container">
                    <Session />
                    <TaskList />
                    <SessionHistory />
                </div>
            </main>
        </>
    );
}

export default App;
