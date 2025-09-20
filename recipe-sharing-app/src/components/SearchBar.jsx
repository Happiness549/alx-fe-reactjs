import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ display: 'block', marginBottom: '16px', width: '100%', padding: '8px' }}
    />
  );
};

export default SearchBar;
