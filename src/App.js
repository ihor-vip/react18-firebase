import "./App.css";
import {useToggle} from "./useToggle";

function App() {
    const [isVisible, toggle] = useToggle();
    const [isVisible2, toggle2] = useToggle();

    return (
        <div className="App">
            <button onClick={toggle}>{isVisible ? "Hide_1" : "Show_1"}</button>
            {isVisible && <h1> Hidden text </h1>}

            <button onClick={toggle2}>{isVisible2 ? "Hide_2" : "Show_2"}</button>
            {isVisible2 && <h1> Hidden text </h1>}
        </div>
    );
}

export default App;