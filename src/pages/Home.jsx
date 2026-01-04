import MovieList from "../components/MovieList";
import Filter from "../components/Filter";

function Home({ movies, setTitleFilter, setRateFilter }) {
  return (
    <div>
      <h1>🎬 Movie App</h1>
      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
