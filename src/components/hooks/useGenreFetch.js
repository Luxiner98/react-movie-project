import {useState,useEffect} from 'react';

const GENRES = 'https://api.themoviedb.org/3/genre/movie/list?api_key=5e7d0c061419626c5f26ce46b7738aa0&language=en-US';

export const useGenreFetch = () =>{
    const [state,setState] = useState({genres:[]});
    const [error,setError] = useState(false);

    const fetchGenre =  async () => {
        setError(false);
        try{
            const result = await (await fetch(GENRES)).json();
            //console.log(result);
            setState({
                ...result,
            })

        }catch(error){
            setError(true);
            console.log(error);
        }
    }

    useEffect(() => {
        fetchGenre();
    },[]);

    return[state,error];
}