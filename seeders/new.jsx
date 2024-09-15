let sumRatings = data.place.comments.reduce((tot, c) => {
    return tot + c.stars
  }, 0)
  let averageRating = sumRatings / data.place.comments.length
  rating = (
    <h3>
    {Math.round(averageRating)} stars
    </h3>
  )
  