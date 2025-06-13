import Search from "./components/Search";
import { useState, useEffect } from "react";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTION = {
  method: "GET",
  headers: {
    accept: "applications/json",
    authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const fetchMovies = async () => {
    try {
    } catch (error) {
      console.log(error);
      setErrorMessage("Error fetching movies");
    }
  };

  useEffect(() => {}, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="hero-banner" />
          <h1>
            Find <span className="text-gradient">movies</span> You'll enjoy
            without the Hassle
          </h1>
        </header>
        <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
        <h1 className="text-white">{searchTerm}</h1>
      </div>
    </main>
  );
};

export default App;
