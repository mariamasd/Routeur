import React from 'react'
import MovieCard from './MovieCard';
import { useState } from 'react';
    
    function Formulaire() {
      const [movies, setMovies] = useState([]);
       const [image, setImage] = useState("");
      const [titre, setTitre] = useState("");
     
      
    const handleImageChange = (e) => setImage(e.target.value);
      const handletitreChange = (e) => setTitre(e.target.value);
      

    
      const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = {image,titre };
        setMovies((movies) => [...movies, newMovie]);
         setImage("");
        setTitre("");
      };
    
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="inserez l'image"
              value={image}
              onChange={handletitreChange}
            />
            <input
              type="text"
              placeholder="Donnez le titre..."
              value={titre}
              onChange={handleImageChange}
            />
            <button type="submit">Add movie</button>
          </form>
          <div>
            {movies.map((movie, index) => (
              <MovieCard
                key={index}
                image={movie.image}
                titre={movie.titre}
                
               
              />
            ))}
          </div>
        </div>
      );
    }
    
    export default Formulaire;
    