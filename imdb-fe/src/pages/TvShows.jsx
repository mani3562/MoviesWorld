import React, { useEffect, useState } from 'react'
import MovieCard from '../components/Cards/MovieCard'

function TvShows() {
  const [TvCard, setTvCard] = useState([])

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/airing_today?api_key=e3f8a159bd6561dbe569cfc875bd1f79"
    )
      .then((res) => res.json())
      .then((data) => setTvCard(data.results));
  }, []);

  return (
    <div>
     <h2 className='movie-header'>UPCOMING</h2>
     {
      TvCard.map((movie) => (
         <MovieCard movie={movie}/>
      ))
     }
    </div>
  )
}

export default TvShows