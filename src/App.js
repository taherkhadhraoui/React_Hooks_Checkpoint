// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />;
import { useState } from "react";
import "./App.css";
import MoviesList from "./Components/MoviesList/MoviesList";
import NavbarC from "./Components/Navbar/NavbarC";
import moviesData from "./Constants/Data";

function App() {
  const [moviesdata, setMoviesdata] = useState(moviesData);
  const [searchtitle, setSearchtitle] = useState("");
  const [searchrate, setSearchrate] = useState(0);
  return (
    <div className="App">
      <NavbarC
        moviesdata={moviesdata}
        setMoviesdata={setMoviesdata}
        searchtitle={searchtitle}
        setSearchtitle={setSearchtitle}
        searchrate={searchrate}
        setSearchrate={setSearchrate}
      />

      <MoviesList
        movieslistprops={moviesdata}
        searchtitle={searchtitle}
        searchrate={searchrate}
      />
    </div>
  );
}

export default App;
