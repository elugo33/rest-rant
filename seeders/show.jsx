function Show({ place }) {
    // Default message when there are no comments
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    );
  
    // Default message when there is no rating
    let rating = (
      <h3 className="inactive">
        Not yet rated
      </h3>
    );
  
    // If there are comments, map through them and calculate the rating
    if (place.comments.length) {
      // Map through comments to display them
      comments = place.comments.map(c => (
        <div key={c._id} className="border col-sm-4">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😊'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars} stars</h4>
        </div>
      ));
  
      // Calculate average rating
      let sumRatings = place.comments.reduce((tot, c) => tot + c.stars, 0);
      let averageRating = sumRatings / place.comments.length;
  
      // Display the average rating
      rating = (
        <h3>
          {averageRating.toFixed(1)} stars
        </h3>
      );
    }
  
    return (
      <Def>
        <main>
          <div className="row">
            {/* Place details */}
            <div className="col-sm-6">
              <h1>{place.name}</h1>
              <h2>Rating</h2>
              {rating}
              <br />
              {/* Other place details here */}
            </div>
            {/* Comments section */}
            <div className="row">
              {comments}
            </div>
          </div>
        </main>
      </Def>
    );
  }
  
  module.exports = Show;
  