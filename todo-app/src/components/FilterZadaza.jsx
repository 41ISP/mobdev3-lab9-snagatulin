import "./FilterZadaza.css";

const FilterButtons = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { key: 'all', label: 'Все' },
    { key: 'active', label: 'Активные' },
    { key: 'completed', label: 'Завершенные' }
  ];

  return (
    <div className="filters">
      {filters.map(filter => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`filter-button ${currentFilter === filter.key ? 'active' : ''}`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;