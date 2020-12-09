import React from 'react';

const FilterInput = ({ filter, filterInput }) => (
  <label>
    Find contacts by name
    <input type="text" value={filter} name="filter" onChange={filterInput} />
  </label>
);

export default FilterInput;
