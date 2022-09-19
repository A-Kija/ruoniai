import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import axios from 'axios';
import List from './Components/023/List';
import TreesProvider from './Components/023/TreesProvider';
import Create from './Components/023/Create';

const types = [
    { id: 1, type: 'Lapuotis' },
    { id: 2, type: 'Spygliuotis' },
    { id: 3, type: 'Palmė' }
];

function App() {

    const [trees, setTrees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3003/trees/3/?sort=1')
            .then(res => {
                setTrees(res.data);
            })
    }, []);



    return (
        <TreesProvider.Provider value={{
            trees,
            types
        }}>
            <div className="App">
                <header className="App-header">
                    <Create />
                    <List />
                </header>
            </div>
        </TreesProvider.Provider>
    );
}

export default App;