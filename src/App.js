import "./App.css";
import {planets} from "./planets";

function App() {

    return (
        <div className="App">
            {planets.map(
                (planet, key) => !planet.isGasPlanet && <h1 key={planet.id}> {planet.name}  </h1>
            )}
        </div>
    );
}

export default App;