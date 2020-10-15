import {useState, useEffect, useCallback} from 'react';

const movie_API='https://api.themoviedb.org/3/movie/';
const API_KEY='?api_key=5e7d0c061419626c5f26ce46b7738aa0&language=en-US';

export const useMovieFetch = (movieId) => { 
    const [state,setState] = useState({});
    const [error,setError] = useState(false);
    const [loading,setLoading]=useState(false);

    const fetchData = useCallback(async () => {
        setError(false);
        setLoading(true);
        try{
            const endpoint = `${movie_API}${movieId}${API_KEY}`;
            const result = await (await fetch(endpoint)).json();
            //console.log(result);
            setState({
                ...result,
            })

        }catch(error){
            setError(true);
            console.log(error);
        }
        setLoading(false);
    },[movieId]);

    useEffect(() => {
        fetchData();
    },[fetchData]);

    return [state,error,loading];
}