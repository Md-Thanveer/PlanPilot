const Event = require('../models/Event');

// Get all events
exports.getAllEvents = async (req, res) => {
    const events = await Event.find().sort({ date: 1 });
    res.render('index', { events });
};

// Add new event
exports.addEvent = async (req, res) => {
    const { name, date, description } = req.body;
    await Event.create({ name, date, description });
    res.redirect('/');
};

// Edit event
exports.getEditEvent = async (req, res) => {
    const event = await Event.findById(req.params.id);
    res.render('edit-event', { event });
};

exports.updateEvent = async (req, res) => {
    const { name, date, description } = req.body;
    await Event.findByIdAndUpdate(req.params.id, { name, date, description });
    res.redirect('/');
};

// Delete event
exports.deleteEvent = async (req, res) => {
    await Event.findByIdAndDelete(req.params.id);
    res.redirect('/');
};
