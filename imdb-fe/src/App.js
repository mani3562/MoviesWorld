// import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import HomeP from "./pages/HomeP";
import Header from "./components/Header/Header";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import UpComing from "./pages/UpComing";
import Detail from "./pages/Detail";
// import MoviesCard from "./components/Cards/MoviesCard";
// import MovieList from "./components/MoviesList/MovieList";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" index element={<HomeP/>} />
        <Route path="movie/:id" element={<Detail/>} />
        <Route path="movies/:type" element={<Popular/>} />
        <Route path="movies/Top_Rated" element={<TopRated/>} />
        <Route path="movies/Upcoming" element={<UpComing/>} />
        <Route path="/*" element={<h1>Error page</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
