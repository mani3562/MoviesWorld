import React, { useEffect, useState } from 'react'
import "./Bannar.css";
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaRegStarHalf } from "react-icons/fa";




function Bannar() {
  const[ popularMovies, setPopularMovies] = useState([]);
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=e3f8a159bd6561dbe569cfc875bd1f79')
    .then((res) => res.json())
    .then((data) => setPopularMovies(data.results));
   
    
  },[]);   

  return (
    <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies && popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt=""
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ""}
                  <div>
                  <span className="posterImage__rating">
                    <FaRegStarHalf />
                    {movie ? movie.vote_average : ""}/10
                  </span>
                  </div>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>        
      </div>
  )
}

export default Bannar