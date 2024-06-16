const express = require('express');
const router = express.Router();

// Route for the homepage
router.get('/', (req, res) => {
    res.render('homepage', {
        title: 'Flight Booker',
        message: 'Welcome to Flight Booker!'
    });
});

// Export the router
module.exports = router;