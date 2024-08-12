import React from "react";

function Filter({ search, onCategoryChange, onSearchChange }) {
  const handleSearchInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="Filter">
      <input 
        type="text" 
        name="search" 
        placeholder="Search..." 
        value={search}
        onChange={handleSearchInputChange}
      />
      <select name="filter" onChange={(event) => onCategoryChange(event.target.value)}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;