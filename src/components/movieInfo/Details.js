import React from 'react';
import ReactStars from "react-rating-stars-component";

const Details = ({rating, popularity, language, proComp, title}) =>{


    const ratingChanged = (newRating) => {
        console.log(newRating);
        localStorage.setItem(title,newRating);
    };
    const savedValue=localStorage.getItem(title)? localStorage.getItem(title):0;

    let arrCompanies = [];
    proComp && proComp.length>0? proComp.forEach(element => {
        arrCompanies.push(element.name,', ');
    }):console.log();
    arrCompanies.pop();

    return(
        <div className="movie-details">
            <div className="stars-rating">
                <ReactStars
                    size={30}
                    count={10}
                    isHalf={false}
                    onChange={ratingChanged}
                    value={savedValue}
                />
            </div>
            <p>Rating: {rating}</p>
            <p>Popularity: {popularity}</p>
            <p>Language: {language}</p>
            <p>Production companies: {arrCompanies.length>1 ? arrCompanies : 'Not found'}</p>
        </div>
    )
}

export default Details;