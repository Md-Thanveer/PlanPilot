const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Render form to add an event
router.get('/add', (req, res) => {
    res.render('add-event');
});

// Get all events
router.get('/', eventController.getAllEvents);

// Add new event
router.post('/add', eventController.addEvent);

// Render form to edit an event
router.get('/edit/:id', eventController.getEditEvent);

// Update an event
router.post('/edit/:id', eventController.updateEvent);

// Delete an event
router.post('/delete/:id', eventController.deleteEvent);

module.exports = router;
