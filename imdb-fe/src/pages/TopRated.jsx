import React, { useEffect, useState } from 'react'
import MovieCard from '../components/Cards/MovieCard'
// import MoviesCard from '../components/Cards/MoviesCard'


function TopRated() {
  const[TopRatedCard, setTopRatedCard] = useState([]);

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e3f8a159bd6561dbe569cfc875bd1f79")
    .then((res) => res.json())
    .then((data) => setTopRatedCard(data.results))
  },[])
  return (
    <div>
     <h2 className='movie-header'> TOP RATED</h2>
     {
      TopRatedCard.map((movie) => (
         <MovieCard movie={movie}/>
      ))
     }
    </div>
  )
}

export default TopRated