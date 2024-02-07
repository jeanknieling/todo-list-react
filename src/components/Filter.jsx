function Filter({ filter, setFilter, setSort }) {
  return (
    <div className="filter">
      <h2>Filtrar: </h2>
      <div className="filter-options">
        <div className="filter-options-container">
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Todas</option>
            <option value="completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>

        <div className="filter-options-container">
          <p>Ordem alfabética: </p>
          <div>
            <button onClick={() => setSort("asc")}>ASC</button>
            <button onClick={() => setSort("desc")}>DESC</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
