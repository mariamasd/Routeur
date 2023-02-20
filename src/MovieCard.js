import React from 'react'
import Header from './Header'
import MovieList from './MovieList'
import { Link } from 'react-router-dom';
import Formulaire from './Formulaire';

function MovieCard() {
  return (
    <div className='movie1'>
        <MovieList/>
       <Link to="/formulaire"> <button> Ajouter</button></Link>
    </div>
  )
}

export default MovieCard
