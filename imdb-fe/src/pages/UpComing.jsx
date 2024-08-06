import React, { useEffect, useState } from 'react'
import MovieCard from '../components/Cards/MovieCard';

function UpComing() {
  const[UpComingCard, setUpComingCard] = useState([])

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=e3f8a159bd6561dbe569cfc875bd1f79"
    )
      .then((res) => res.json())
      .then((data) => setUpComingCard(data.results));
  }, []);
  
  return (
    <div>
     <h2 className='movie-header'>UPCOMING</h2>
     {
      UpComingCard.map((movie) => (
         <MovieCard movie={movie}/>
      ))
     }
    </div>
  )
}

export default UpComing