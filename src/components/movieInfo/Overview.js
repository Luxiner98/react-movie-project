import React from 'react';

const IMG_URL = 'https://image.tmdb.org/t/p/w780';

const Overview = ({title ,image, overview}) =>{
    return(
            <div className="overview">
                <img src={image ? `${IMG_URL}${image}`: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'} alt={title} />
                <p>{overview}</p>
            </div>
    )
}

export default Overview;