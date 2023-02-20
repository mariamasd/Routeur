import React from 'react'
import photo from './images/film1.jpg';
import film3 from './images/fim3.jpg';
import film4 from './images/fim4.jpg';
import film5 from './images/film5.jpg';
import film6 from './images/film6.jpg';
import film7 from './images/film7.jpg';
import film8 from './images/film8.webp';
import film9 from './images/film9.jpg';
import { Link } from 'react-router-dom';
function MovieList() {
    const movie=[
        {
         image: <Link to="/description"><img src={photo}></img></Link> ,
           titre:'TYLER RAKE 2'
        } , {
            image: <Link to="/description"> <img src={film3}></img></Link>,
            titre:"La Jeune Fille et la Mer", 
         } , {
             titre:'Gray Man',
             image: <Link to="/description"> <img src={film4}></img></Link>,
         } , {
            image: <Link to="/description"> <img src={film5}></img></Link>,
            titre:"Morbius"
         } , {
            image: <Link to="/description"><img src={film6}></img></Link>,
            titre:"THE OLD GUARD"
         } , {
            image: <Link to="/description"><img src={film7}></img></Link>,
            titre:"L'HOMME DE GUERRE"
         } , {
            image: <Link to="/description/description1"> <img src={film8}></img></Link>,
            titre:"Game of Thrones"
         },  {
            image: <Link to="/description"><img src={film9}></img></Link>,
            titre:'TYLER RAKE 2'
         } 
          
        
    ];
  return (
    <>
{movie.map(mov =>(
    <div>
        {mov.image}
        <h2>{mov.titre}</h2>
    </div>
))}
    </>
  )
    
}

export default MovieList
