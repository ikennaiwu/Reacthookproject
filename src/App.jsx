import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "https://via.placeholder.com/200",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "Space exploration and time",
      posterURL: "https://via.placeholder.com/200",
      rating: 4,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  // Add new movie
  const addMovie = () => {
    const newMovie = {
      title: "New Movie",
      description: "New description",
      posterURL: "https://via.placeholder.com/200",
      rating: 3,
    };

    setMovies([...movies, newMovie]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Movie App</h1>

      <Filter
        setTitleFilter={setTitleFilter}
        setRateFilter={setRateFilter}
      />

      <button onClick={addMovie}>Add Movie</button>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
