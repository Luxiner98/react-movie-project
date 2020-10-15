import React from 'react';

const LoadMoreButton = ({callback}) => {
    return(
        <div className="loadMoreMovies">
            <button className="loadMoreButton" onClick={callback}>LOAD</button>
        </div>
    )
}

export default LoadMoreButton;