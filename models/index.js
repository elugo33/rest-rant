// Load environment variables
require('dotenv').config();

// Import mongoose
const mongoose = require('mongoose');

// Connect to MongoDB using the MONGO_URI from .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Error connecting to MongoDB:', err));

// Import the Place model
const Place = require('./places'); // Assuming './places' is the file where your Place schema/model is defined

// Define your Express router (assuming Express is already set up)
const express = require('express');
const router = express.Router();

// Define a route to get a Place by ID
router.get('/:id', async (req, res) => {
    try {
        const place = await Place.findById(req.params.id); // Use async/await to find the place
        if (place) {
            res.render('places/show', { place }); // Render the view with the place data
        } else {
            res.render('error404'); // If no place is found, render a 404 error page
        }
    } catch (err) {
        console.error('Error fetching place by ID:', err);
        res.render('error404'); // In case of an error, render a 404 error page
    }
});

module.exports = router;

const db = require('./models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
    founded: 2020
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
