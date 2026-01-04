import { useParams, Link } from "react-router-dom";

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}</p>

      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="Movie Trailer"
        allowFullScreen
      ></iframe>

      <br /><br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}

export default MovieDetails;
