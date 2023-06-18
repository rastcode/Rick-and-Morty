import React from 'react'

function SearchBtn({searchHandel}) {
  return (
    <button className="search-btn" onClick={searchHandel}>
        Search
      </button>
  )
}

export default SearchBtn