import React from 'react';
import {Link} from '@reach/router';

const MovieCard = ({image, movieId, year, language, vote, movieName }) =>{
    return(
        <div className="movie-card">
            <Link to={`/${movieId}`}>
                    <p>{vote}</p>
                    <img className="clickable" src={image} alt={movieName} />
                    <p>{movieName} ({year.slice(0,4)})</p>
                    <p>Language: {language}</p>
            </Link>
        </div>
    )
}

export default MovieCard;