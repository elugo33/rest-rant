const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })
}

seed()
function Show({ place }) {
    // Default message when there are no comments
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    );
  
    // Check if there are comments and render them
    if (place.comments.length) {
      comments = place.comments.map(c => (
        <div key={c._id} className="border"> {/* Use a unique key for each comment */}
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😊'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong> {/* Fixed typo: stong -> strong */}
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      ));
    }
  
    return (
      <Def>
        <main>
          <div className="row">
            {/* Display place details */}
          </div>
          <hr />
          <h2>Comments</h2>
          {comments}
        </main>
      </Def>
    );
  }
  
  module.exports = Show;
  