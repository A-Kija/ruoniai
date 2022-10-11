import { useContext, useState } from 'react';
import Comment from '../../Contexts/Comment';

function Line({ movie }) {

    const { setComment } = useContext(Comment);

    return (
        <li className="list-group-item">
            <div className="home">
                <div className="home__content">
                    <div className="home__content__info">
                        <h2>{movie[0]}</h2>
                        {movie[1][0].image ? <div className='img-bin'>
                            <img src={movie[1][0].image} alt={movie[0]}>
                            </img>
                        </div> : null}
                    </div>
                    <div className="home__content__price">
                        {movie[1][0].price} Eur
                    </div>
                </div>
            </div>
            <div className="comments">
                <ul className="list-group">
                    {
                        movie[1]?.map(c => <li key={c.cid} className="list-group-item"><p>{c.post}</p></li>)
                    }
                </ul>
            </div>
        </li>
    )
}

export default Line;