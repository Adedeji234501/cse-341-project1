const express = require('express');
const router = express.Router();
router.use('/', require('./swagger'));
router.get('/',(req, res) => {
    res.send('Hello World');
});

const contactsRoutes = require('./contacts');
router.use('/contacts', contactsRoutes);

module.exports = router;