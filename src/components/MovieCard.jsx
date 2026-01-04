function MovieCard({ movie }) {
  return (
    <div style={{ border: "1px solid #ccc", width: "250px", padding: "10px" }}>
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{ width: "100%" }}
      />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}</p>
    </div>
  );
}

export default MovieCard;
