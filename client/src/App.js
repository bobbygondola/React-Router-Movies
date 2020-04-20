import React, { useState } from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from "./Movies/Movie"

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
    {/* HERE WE ARE IMPLEMTNING COMPONENTS EXPORTED FROM THEIR FILE */}
      <SavedList list={savedList} />
      <Route exact path="/"> <MovieList /></Route>
    {/* HERE IS A DYNAMIC ID URL BY :ID */}
      <Route path="/movies/:id"> <Movie /></Route>

    </div>
  );
};

export default App;
