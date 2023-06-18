import React from 'react'

function Search({inputValue,handleChange}) {
  return (
    <div className="searchBar">
    <div className="search-container">
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </div>
  </div>
  )
}

export default Search