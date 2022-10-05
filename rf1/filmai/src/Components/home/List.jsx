import { useContext } from 'react';
import Home from "../../Contexts/Home";
import Line from './Line';

function List() {

    const { movies, setMovies } = useContext(Home);

    const resetFilter = () => {
        setMovies(m => m.map(mo => ({...mo, show: true})));
    }

    return (
        <div className="card m-4">
            <h5 className="card-header">Movies List <small onClick={resetFilter}>show all cats</small></h5>
            <div className="card-body">
                <ul className="list-group">
                    {
                        movies?.map(m => m.show ? <Line key={m.id} movie={m} /> : null)
                    }
                </ul>
            </div>
        </div>
    );
}

export default List;