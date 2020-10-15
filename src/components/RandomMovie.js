import React, {useState} from 'react';
import Fab from '@material-ui/core/Fab';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import Modal from 'react-modal';
import {useGenreFetch} from './hooks/useGenreFetch';
import {navigate} from '@reach/router';


const numOfPagesGenre = 'https://api.themoviedb.org/3/discover/movie?api_key=5e7d0c061419626c5f26ce46b7738aa0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=';
const randMovieOnPage = 'https://api.themoviedb.org/3/discover/movie?api_key=5e7d0c061419626c5f26ce46b7738aa0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=';

Modal.setAppElement('#root');

const RandomMovie = () =>{

    const [openModal, setOpenModal] = useState(false);
    const [genre, error] = useGenreFetch();
    const [radioChecked, setRadioChecked] = useState('');

    const genrePages = async (genreId) =>{
        const result_page = await (await fetch(numOfPagesGenre+genreId)).json();

        //random page of selected genre
        let numberOfPages = result_page.total_pages;
        let randomPage = Math.floor(Math.random()*(numberOfPages+1));

        //random movie on random page
        const result_movie = await(await fetch(randMovieOnPage+randomPage+'&with_genres='+genreId)).json();
        let numberOfMovies = result_movie.results.length;
        let randomMovieNumber = Math.floor(Math.random() *numberOfMovies);
        let movieIdNumber = result_movie.results[randomMovieNumber].id;
        return(navigate(`/${movieIdNumber}`))
    }

    //console.log(genre);
    if(error) return <div>Something went wrong...</div>;

    return(
        <div className="random">
            <Fab color="secondary" size="large" onClick={()=>setOpenModal(true)}>
                <ShuffleIcon />
            </Fab>
            <Modal isOpen={openModal} onRequestClose={()=>setOpenModal(false)} className="myModal">
                <span className="close" onClick={()=>setOpenModal(false)}>&times;</span>
                <h1>Movie roulette: </h1>
                <hr></hr>
                <div className="button-div">
                        {genre && genre.genres.length>0 ? genre.genres.map(el=>(
                            <div key={el.id} className="buttons">
                                <label>
                                    <input 
                                        type="radio" 
                                        value={el.id} 
                                        name="genres" 
                                        checked={radioChecked === `${el.id}`} 
                                        onChange={(el)=>setRadioChecked(el.target.value)}  
                                    />
                                    {el.name}
                                    <br></br>
                                </label>
                            </div>
                        )):'Loading...'}
                        <hr></hr>
                        <div className="roll-btn">
                            <button onClick={()=>genrePages(radioChecked)}>Roll</button>
                        </div>
                </div>
            </Modal>
        </div>
    )
}

export default RandomMovie;