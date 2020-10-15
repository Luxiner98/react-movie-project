import React from 'react';
import {navigate} from '@reach/router';

const Header = ({title, year}) =>{
    return(
        <div className="header">
            <button className="btn" onClick={()=>navigate('/')}>HOME</button>
            <h1>{title} ({year ? year.slice(0,4):'Loading...'})</h1>           
        </div>
    )
}

export default Header;