import React from "react";

function Pagination({ pageNumber, updatePageNumber }) {
  const pages = [1, 2, 3, 4, 5];
  return (
    <div className="pagin-container">
      <button
        className="btn"
        onClick={() => updatePageNumber(pageNumber > 1 ? pageNumber - 1 : 1)}
      >
        Prev
      </button>
      {pages.map((item) => (
        <button
          key={item}
          className={item === pageNumber ? "pagin-btn-clecked" : "btn"}
          onClick={() => updatePageNumber(item)}
        >
          {item}
        </button>
      ))}
      <button
        className="btn"
        onClick={() =>
          updatePageNumber(
            pageNumber < pages.length ? pageNumber + 1 : pages.length
          )
        }
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
