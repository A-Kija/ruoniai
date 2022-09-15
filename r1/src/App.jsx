import './App.scss';
import Buttons from './Components/025/Buttons';
import { useEffect, useState } from 'react';
import randColor from './Functions/randColor';

function App() {

    const [number, setNumber] = useState(0);
    const [color, setColor] = useState(null);

    useEffect(() => {
        setColor(randColor());
    }, [number]);


    return (
        <div className="App">
            <header className="App-header">
            <h2 style={{color}}>{number}</h2>
            <h1>Total Recall 2</h1>
            <Buttons setNumber={setNumber} />
            </header>
        </div>
    );
}

export default App;