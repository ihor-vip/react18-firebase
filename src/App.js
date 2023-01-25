import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [predictedAge, setPredictedAge] = useState(null);

    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then(
            (res) => {
                setPredictedAge(res.data);
            }
        );
    };

    return (
        <div className="App">
                <input placeholder="Enter name..."
                       onChange={(event) => {
                       setName(event.target.value)
                }}
                    />
                <button onClick={fetchData}> Get age</button>

                    <h1>Information</h1>

                    <p>Name: {predictedAge?.name}</p>
                    <p>Predicted Age: {predictedAge?.age}</p>
                    <p>Count: {predictedAge?.count}</p>

        </div>
    );
}

export default App;