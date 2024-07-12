import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Movielist = ({movies,fetchTrailer}) => {
    const[trailer,setTrailer]=useState(null);
    console.log(trailer,"trailer")
  
    

    const movieClick =(title)=>{
        fetchTrailer(title,setTrailer);
    };
  return (
    <div>
        <ul>
            {movies.map(movie=>(
                <li key={movie.imdbID} onClick={()=>movieClick(movie.Title)}>
                    {movie.Title} ({movie.year})

                </li>
            ))}
        </ul>
        {trailer && (
                <div id="trailer">
                    <iframe
                        src={`https://www.youtube.com/embed/${trailer}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        title="Movie Trailer"
                    ></iframe>
                </div>
            )}
    </div>
  )
}

export default Movielist