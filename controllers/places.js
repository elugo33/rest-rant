const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .populate('comments')  
        .then(place => {
            console.log(place.comments);
            res.render('places/show', { place });  
        })
        .catch(err => {
            console.log('Error fetching place:', err);
            res.render('error404');  
        });
});

router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/places');
        })
        .catch(err => {
            console.log('Error deleting place:', err);
            res.render('error404');
        });
});

module.exports = router;

