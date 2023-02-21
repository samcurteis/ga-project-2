// import React from 'react';
// import { ReactDOM } from 'react';

function SearchBar({ value, handleChange }) {
  const handleInputChange = (e) => handleChange(e.target.value);

  return (
    <div className="SearchBar">
      <div className="container">
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              type="search"
              className="input is-medium"
              placeholder="Search with keywords..."
              value={value}
              onChange={handleInputChange}
            />
          </div>
          <div className="control">
            <span className="button is-dark is-info is-medium">Search</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
