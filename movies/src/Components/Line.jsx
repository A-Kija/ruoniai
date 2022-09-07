import genres from '../Data/genres';

function Line({ movie }) {
    return (
        <li className="list-group-item">
            <div className="movie">
                <div className="movie__content">
                    <div className="movie__content__title">
                        {movie.title}
                    </div>
                    <div className="movie__content__genre">
                        {genres.find(g => g.id === movie.genre).type}
                    </div>
                    <div className="movie__content__year">
                        {movie.year}
                    </div>
                </div>
                <div className="movie__buttons">
                <button type="button" className="btn btn-outline-success">Edit</button>
                <button type="button" className="btn btn-outline-danger">Delete</button>
                </div>
            </div>
        </li>
    )
}

export default Line;