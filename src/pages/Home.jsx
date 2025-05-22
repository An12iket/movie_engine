import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css"

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", release_date: "2024" },
    { id: 2, title: "the matrix", release_date: "2021" },
    { id: 3, title: "Mufasa", release_date: "2020" },
    { id: 4, title: "stranger things", release_date: "2023" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies"
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="submit" className="submit-btn">
          Search
        </button>
      </form>

      <div className="home-grid">
        {movies.map(
          (movie) =>
            ( 
                <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
