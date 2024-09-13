
module.exports = router;
const express = require('express');
const router = express.Router();
const db = require('../models');  
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')  
    .then(place => {
        console.log(place.comments);
        res.render('places/show', { place });  
    .catch(err => {
        console.log('Error fetching place:', err);
        res.render('error404');  
    });
});

module.exports = router;
function Show({ place }) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    );
  
    if (place.comments && place.comments.length) {
      comments = place.comments.map((comment, index) => (
        <div key={index}>
          <h4>{comment.author}</h4>
          <p>{comment.content}</p>
        </div>
      ));
    }
  
    return (
      <Def>
        <main>
          <div className="row">
        
          </div>
          <hr />
          <h2>Comments</h2>
          {comments}
        </main>
      </Def>
    );
  }
  
  module.exports = Show;
  
