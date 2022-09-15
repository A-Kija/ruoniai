import './App.scss';

function App() {

    const bu = () => {
        console.log('Būūūūūūūū');
    }

    return (
        <div className="App">
            <header className="App-header">
            <h1>Total Recall 1</h1>

            <button onClick={() => console.log('Būūūūūūūū')}>Būūūūūū</button>

            <button onClick={bu}>Būūūūūū ver. 2</button>

            </header>
        </div>
    );
}

export default App;