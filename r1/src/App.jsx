import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import axios from 'axios';

function App() {

    const [trees, setTrees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3003/trees')
        .then(res => {
            setTrees(res.data);
        })
    }, []);


    return (
        <div className="App">
            <header className="App-header">
            <h1>Server</h1>
            <ul>
            {
                trees.map(t => <li key={t.id}>{t.title}</li>)
            }
            </ul>
            </header>
        </div>
    );
}

export default App;