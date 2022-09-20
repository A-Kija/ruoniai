import './App.scss';
import InnerJoin from './Components/027/InnerJoin';
import LeftJoin from './Components/027/LeftJoin';
import RightJoin from './Components/027/RightJoin';

function App() {

    return (
        <div className="App">
            <header className="App-header">
            <h1>JOIN</h1>
            <InnerJoin />
            <LeftJoin />
            <RightJoin />
            </header>
        </div>
    );
}

export default App;