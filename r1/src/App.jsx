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
    const [createData, setCreateData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/trees')
            .then(res => {
                setTrees(res.data);
            })
    }, []);

    useEffect(() => {
        if (null === createData) {
            return;
        }

    }, [createData]);



    return (
        <TreesProvider.Provider value={{
            trees,
            types,
            setCreateData
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