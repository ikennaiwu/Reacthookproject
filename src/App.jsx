import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  const [movies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "https://via.placeholder.com/200",
      rating: 5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "Interstellar",
      description: "Space exploration and time",
      posterURL: "https://via.placeholder.com/200",
      rating: 4,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            movies={filteredMovies}
            setTitleFilter={setTitleFilter}
            setRateFilter={setRateFilter}
          />
        }
      />
      <Route
        path="/movie/:id"
        element={<MovieDetails movies={movies} />}
      />
    </Routes>
  );
}

export default App;
