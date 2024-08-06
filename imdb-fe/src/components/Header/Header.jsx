// import React, { useState } from "react";
import { Link } from "react-router-dom";
import download from "../../img/download.png";
import "./Header.css";
// import { useState } from "react";


function Header() {
  // const [movieName, setMovieName] = useState([])
  // const [val, setVal] = useState('');

  // function changeHandler(e){
  //   setMovieName(e.target.value)

  // }

  return (
    <div className="haeder-li">
      <Link to="/">
        {" "}
        <img className="imdb-logo" src={download} alt="imdb-logo" />
      </Link>
      <div className="list-n">
        <Link className="list-n" to="/movies/Popular">
          <span>Popular</span>
        </Link>
        <Link className="list-n" to="/movies/Top_Rated">
          <span>Top Rated</span>
        </Link>
        <Link className="list-n" to="/movies/Upcoming">
          <span>Upcoming</span>
        </Link>
      </div>
      <div className="search-bar" >
        <input type="search" placeholder="Type to search..."
       />
        <button id='s-btn' >search</button>
      </div>
      
    </div>
  );
}

export default Header;
