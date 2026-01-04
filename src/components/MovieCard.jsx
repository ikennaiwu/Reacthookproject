import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div style={{ border: "1px solid #ccc", width: "250px", padding: "10px" }}>
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "black" }}>
        <img src={movie.posterURL} alt={movie.title} style={{ width: "100%" }} />
        <h3>{movie.title}</h3>
        <p>⭐ {movie.rating}</p>
      </Link>
    </div>
  );
}

export default MovieCard;
