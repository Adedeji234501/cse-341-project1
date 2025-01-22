const express = require('express');

const contactsController = require('../controllers/contacts');

const router = express.Router();

// GET /feed/posts
router.get('/', contactsController.getAllContacts);
router.get('/:id', contactsController.getContactById)
// localhost:8080/professional/
module.exports = router;