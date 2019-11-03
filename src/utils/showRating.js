import React from 'react'

export const showRating = function(rating) {
  let result = []
  if (rating >= 0) {
    for (var i = 1; i <= rating; i++) {
      result.push(<i className="fas fa-star" key={i} style={{ color: '#e08686' }}></i>)
    }
    for (var j = 1; j <= 5 - rating; j++) {
      result.push(<i className="fas fa-star" key={i + j} style={{ color: '#e0e0e0' }}></i>)
    }
  }
  return result
}
