const mongoose = require('mongoose');

// Define the Place schema
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
});

// Create the Place model from the schema
const Place = mongoose.model('Place', placeSchema);

module.exports = Place;  // Export the model
const express = require('express');
const router = express.Router();
const Place = require('./places');  // Import the Place model

// GET all places
router.get('/', async (req, res) => {
  try {
    const places = await Place.find(); // Fetch all places from the database
    res.render('places/index', { places });
  } catch (err) {
    console.error('Error fetching places:', err);
    res.render('error404');
  }
});

// POST a new place
router.post('/', async (req, res) => {
  try {
    const newPlace = new Place(req.body);  // req.body should contain place data
    await newPlace.save();
    res.redirect('/places');
  } catch (err) {
    console.error('Error creating place:', err);
    res.render('error404');
  }
});

// GET form to create a new place
router.get('/new', (req, res) => {
  res.render('places/new');
});

// GET a single place by ID
router.get('/:id', async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) {
      res.render('error404');
    } else {
      res.render('places/show', { place });
    }
  } catch (err) {
    console.error('Error fetching place:', err);
    res.render('error404');
  }
});

// PUT (update) a place by ID
router.put('/:id', async (req, res) => {
  try {
    const place = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!place) {
      res.render('error404');
    } else {
      res.redirect(`/places/${req.params.id}`);
    }
  } catch (err) {
    console.error('Error updating place:', err);
    res.render('error404');
  }
});

// DELETE a place by ID
router.delete('/:id', async (req, res) => {
  try {
    await Place.findByIdAndDelete(req.params.id);
    res.redirect('/places');
  } catch (err) {
    console.error('Error deleting place:', err);
    res.render('error404');
  }
});

// GET edit form for a place
router.get('/:id/edit', async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) {
      res.render('error404');
    } else {
      res.render('places/edit', { place });
    }
  } catch (err) {
    console.error('Error fetching place for editing:', err);
    res.render('error404');
  }
});

// POST a rant for a place
router.post('/:id/rant', (req, res) => {
  // This is a placeholder. Rant logic should be implemented based on your app design.
  res.send('POST /places/:id/rant stub');
});

// DELETE a rant by its ID
router.delete('/:id/rant/:rantId', (req, res) => {
  // This is a placeholder. Rant deletion logic should be implemented.
  res.send('DELETE /places/:id/rant/:rantId stub');
});

module.exports = router;
