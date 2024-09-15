function Show({ place }) {
  
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    );
  

    let rating = (
      <h3 className="inactive">
        Not yet rated
      </h3>
    );
  
    
    if (place.comments.length) {
      
      comments = place.comments.map(c => (
        <div key={c._id} className="border col-sm-4">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😊'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars} stars</h4>
        
          <form method="POST" action={`/places/${place._id}/comment/${c._id}?_method=DELETE`}>
            <input type="submit" className="btn btn-danger" value="Delete Comment" />
          </form>
        </div>
      ));
  
     
      let sumRatings = place.comments.reduce((tot, c) => tot + c.stars, 0);
      let averageRating = sumRatings / place.comments.length;
  
    
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
        
            <div className="col-sm-6">
              <h1>{place.name}</h1>
              <h2>Rating</h2>
              {rating}
              <br />
          
            </div>
  
           
            <div className="row">
              <h2>Comments</h2>
              {comments}
            </div>
          </div>
        </main>
      </Def>
    );
  }
  
  module.exports = Show;
  
  