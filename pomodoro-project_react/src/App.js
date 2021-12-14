import "./App.css";
import Session from "./Session";
import TaskList from "./TaskList";
import SessionHistory from "./SessionHistory";
import CurrentTime from "./CurrentTime";

function App() {
    return (
        // Header
        <main>
            <CurrentTime />
            <div className="main-container">
                <Session />
                <TaskList />
                <SessionHistory />
            </div>
        </main>
        // Footer
    );
}

export default App;
