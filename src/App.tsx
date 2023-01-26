import React from 'react';
import './App.css';
import {Country, Person} from './components/Person';

function App() {

    const getAge = (name: string): number => {
        return 21
    }

    return (
        <div className="App">
            <Person
                name="Max"
                email="max@gmail.com"
                age={18}
                isMarried={true}
                country={Country.Uk}
                friends={["Sofia", "David", "Ann"]}
            />
        </div>
    );
}

export default App;
