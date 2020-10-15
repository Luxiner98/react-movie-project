import {useState,useEffect} from 'react';

const POPULAR_MOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key=5e7d0c061419626c5f26ce46b7738aa0&language=en-US&page=';

export const useHookFetch = () =>{
    const [state,setState] = useState({movies:[]});
    const [error,setError] = useState(false); 

    const fetchMovies = async (endpoint) =>{
        setError(false);

        const isLoadMore = endpoint.search('page');

        try{
        const result = await (await fetch(endpoint)).json();
        //console.log(result);
        setState(prev => ({
            ...prev,
            movies: isLoadMore !==-1 ? [...prev.movies, ...result.results] : [...result.results],
            currentPage: result.page,
            totalPages: result.total_pages
        }));

        }catch(err){
            setError(true);
            console.log(err);
        }

    }

    useEffect(()=>{
        fetchMovies(`${POPULAR_MOVIES}1`); //page = 1 (if it weren't for that number, then there would be a duplicate of a movie on 2nd page)
    }, [])

    return [{state, error},fetchMovies];
}