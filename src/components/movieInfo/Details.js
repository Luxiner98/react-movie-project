import React from 'react';

const Details = ({rating, popularity, language, proComp}) =>{
    let arrCompanies = [];
    proComp && proComp.length>0? proComp.forEach(element => {
        arrCompanies.push(element.name,', ');
    }):console.log('');
    arrCompanies.pop();

    return(
        <div className="movie-details">
            <p>Rating: {rating}</p>
            <p>Popularity: {popularity}</p>
            <p>Language: {language}</p>
            <p>Production companies: {arrCompanies.length>1 ? arrCompanies : 'Not found'}</p>
        </div>
    )
}

export default Details;