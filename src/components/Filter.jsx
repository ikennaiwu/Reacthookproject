function Filter({ setTitleFilter, setRateFilter }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setTitleFilter(e.target.value)}
      />

      <input
        type="number"
        min="0"
        max="5"
        placeholder="Rating"
        onChange={(e) => setRateFilter(Number(e.target.value))}
        style={{ marginLeft: "10px" }}
      />
    </div>
  );
}

export default Filter;
