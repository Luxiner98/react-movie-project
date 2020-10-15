import React from 'react';
import {Router} from '@reach/router';
import Home from './Home';
import Movie from './Movie';

function App() {
  return (
    <>
        <Router>
            <Home path="/"/>
            <Movie path="/:movieId"/>
        </Router>
    </>
  );
}

export default App;
