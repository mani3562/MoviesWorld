import React, { useEffect, useState } from "react";
import MovieCard from "../components/Cards/MovieCard";
import "./style.css"
// import { Link } from "react-router-dom";

function Popular() {
  const[PopularCard, setPopularCard] = useState([])

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=e3f8a159bd6561dbe569cfc875bd1f79")
    .then((res) => res.json())
    .then((data) => setPopularCard(data.results))
})

  return (
    <div>
      <h2 className="movie-header">Popular</h2>
      {
        PopularCard.map((movie)=>(
          // <Link to={`movie/${movie.id}`}>
          <MovieCard movie={movie} />
          // </Link>
        ))
      }
      
    </div>
  );
}

export default Popular;
