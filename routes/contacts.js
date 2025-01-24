const express = require('express');

const contactsController = require('../controllers/contacts');

const router = express.Router();

// GET /feed/posts
router.get('/', contactsController.getAllContacts);
router.get('/:id', contactsController.getContactById)
router.post('/', contactsController.postUser);
router.put('/:id', contactsController.putUser); // Ensure this line is present
router.delete('/:id', contactsController.deleteUser);
// localhost:8080/professional/
module.exports = router;