import React from 'react'

function Cards({results}) {
  return (
    <div className="cards">
        {results
          ? results.map((item) => (
              <div key={item.id} className="img-container">
                <img src={item.image} alt={item.name} className="img" />
                <h3>{item.name}</h3>
              </div>
            ))
          : "not fuond"}
      </div>
  )
}

export default Cards