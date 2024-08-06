import React  from 'react'
import "./MovieCard.css"
import { FaRegStarHalf } from "react-icons/fa";
import { Link } from 'react-router-dom';

function MovieCard({movie}) {
   
  return (
    <div className='moviescards'>
      <Link style={{textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>
    <div className='cards'>
        <img className='cards-img' src={`https://image.tmdb.org/t/p/original${
                    movie && movie.poster_path
                  }`} alt=''/>
                  <div className='cards_overlay'>
                    <div className='cards_title'>{movie ? movie.original_title : ""}</div>
                    <div className='cards_rating'>
                    <FaRegStarHalf />
                    {movie ? movie.vote_average : ""}/10</div>
                    <div className='cards_overview'>{movie ? movie.overview.slice(0,100)+"...": ""}</div>
                  </div>
    </div>
    </Link>
    </div>
  )
}

export default MovieCard