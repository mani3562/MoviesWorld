import React, { useEffect, useState } from "react";
import "./slider.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegStarHalf } from "react-icons/fa";
// import Header from "../Header/Header";

function SliderM() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [TopRatedMovies, setTopRatedMovies] = useState([]);
  const [UpComingMovies, setUpComingMovies] = useState([]);
  const [TrendingMovies, setTrendingMovies] = useState([]);

   useEffect(() => {
       fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e3f8a159bd6561dbe569cfc875bd1f79`)
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));  
  } , []);
  

  useEffect(() => {
   fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=e3f8a159bd6561dbe569cfc875bd1f79`)
      .then((res) => res.json())
      .then((data) => setTopRatedMovies(data.results));
  }, []);

  useEffect(() => {
    fetch (
      `https://api.themoviedb.org/3/movie/upcoming?api_key=e3f8a159bd6561dbe569cfc875bd1f79`
    )
      .then((res) => res.json())
      .then((data) => setUpComingMovies(data.results));
  }, []);

  useEffect(() => {
    fetch (
      `https://api.themoviedb.org/3/tv/airing_today?api_key=e3f8a159bd6561dbe569cfc875bd1f79`
    )
      .then((res) => res.json())
      .then((data) => setTrendingMovies(data.results));
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="movie-slider">
        <h2>POPULAR</h2>
        <Slider {...settings}>
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="slider">
                <img
                  className="slider-img"
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt=""
                />
              </div>

              <div className="posterImage__overlay-s">
                <div className="posterImage__title-s">
                  {movie ? movie.original_title : ""}
                </div>
                <span className="posterImage__rating-s">
                  <FaRegStarHalf />
                  {movie ? movie.vote_average : ""}/10
                </span>
              </div>
            </Link>
          ))}
        </Slider>
      </div>

      <div className="movie-slider">
        <h2>TOP RATED</h2>
        <Slider {...settings}>
          {TopRatedMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="slider">
                <img
                  className="slider-img"
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt=""
                />
              </div>

              <div className="posterImage__overlay-s">
                <div className="posterImage__title-s">
                  {movie ? movie.original_title : ""}
                </div>
                <span className="posterImage__rating-s">
                  <FaRegStarHalf />
                  {movie ? movie.vote_average : ""}
                </span>
              </div>
            </Link>
          ))}
        </Slider>
      </div>

      <div className="movie-slider">
        <h2>UP COMING</h2>
        <Slider {...settings}>
          {UpComingMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="slider">
                <img
                  className="slider-img"
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt=""
                />
              </div>

              <div className="posterImage__overlay-s">
                <div className="posterImage__title-s">
                  {movie ? movie.original_title : ""}
                </div>
                <span className="posterImage__rating-s">
                  <FaRegStarHalf />
                  {movie ? movie.vote_average : ""}
                </span>
              </div>
            </Link>
          ))}
        </Slider>
      </div>

      <div className="movie-slider">
        <h2>TV SHOWS</h2>
        <Slider {...settings}>
          {TrendingMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="slider">
                <img
                  className="slider-img"
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt=""
                />
              </div>

              <div className="posterImage__overlay-s">
                <div className="posterImage__title-s">
                  {movie ? movie.original_name : ""}
                </div>
                <span className="posterImage__rating-s">
                  <FaRegStarHalf />
                  {movie ? movie.vote_average : ""}
                </span>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SliderM;
