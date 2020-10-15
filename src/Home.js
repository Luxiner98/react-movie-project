import React from 'react';
import Movies from './components/Movies';
import LoadMoreButton from './components/LoadMoreButton';
import RandomMovie from './components/RandomMovie';
import MovieCard from './components/MovieCard';
import {useHookFetch} from './components/hooks/useHookFetch';

//const API_KEY = '5e7d0c061419626c5f26ce46b7738aa0';
const POPULAR_MOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key=5e7d0c061419626c5f26ce46b7738aa0&language=en-US&page=';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

const Home = () =>{
    const [{state, error},fetchMovies] = useHookFetch();
    //console.log(state);
    const loadMoreMovies = () =>{
        const endpoint= `${POPULAR_MOVIES}${state.currentPage+1}`;

        fetchMovies(endpoint);
    }

    if(error) return <div>Something went wrong.</div>;
    if(!state.movies[0]) return <div>Something went wrong.</div>

    return(
        <>
            <Movies >
                {state.movies.map(movie=>(
                    <MovieCard 
                        key={movie.id}  
                        image={`${IMAGE_URL}${movie.poster_path}`}
                        movieId={movie.id}
                        year={movie.release_date}
                        language={movie.original_language}
                        vote={movie.vote_average}
                        movieName={movie.original_title}
                    />
                ))}
              </Movies>
              <LoadMoreButton callback={loadMoreMovies}/>
              <RandomMovie/>
        </>
    )
}

export default Home;