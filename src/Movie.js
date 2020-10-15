import React from 'react';
import {useMovieFetch} from './components/hooks/useMovieFetch';
import Header from './components/movieInfo/Header';
import Overview from './components/movieInfo/Overview';
import Details from './components/movieInfo/Details';

const Movie = ({movieId}) => { 
    const [movie,error,loading] = useMovieFetch(movieId);

    if(error) return <div>Something went wrong...</div>;
    if(loading) return <div>Just a second...</div>

    return(
        <div className="movie-info">
            <Header title={movie.title} year={movie.release_date}/>
            <Overview 
                title={movie.title} 
                image={movie.backdrop_path} 
                overview={movie.overview}
            />
            <Details 
                rating={movie.vote_average} 
                popularity={movie.popularity}
                language={movie.original_language}
                proComp={movie.production_companies}
                title={movie.title}
            />
        </div>
    )
}

export default Movie;