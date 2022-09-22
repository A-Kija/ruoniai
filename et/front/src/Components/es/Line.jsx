// import { useContext } from 'react';
// import DataContext from './DataContext';

function Line({ supplier }) {

    // const { setModalDelData, setModalData } = useContext(DataContext);

    return (
        <li className="list-group-item">
            <div className="line">
                <div className="line__content">
                    <div className="line__content__title">
                        {supplier.title}
                    </div>
                    <div className="line__content__info">
                        {supplier.price} eur/kWh
                    </div>

                </div>
                <div className="movie__buttons">
                    {/* <button onClick={() => setModalData(movie)} type="button" className="btn btn-outline-success">Edit</button>
                    <button onClick={() => setModalDelData(movie)} type="button" className="btn btn-outline-danger">Delete</button> */}
                </div>
            </div>
        </li>
    )
}

export default Line;