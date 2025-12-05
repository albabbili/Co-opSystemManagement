const express = require('express');
const router = express.Router();
const systemUserController = require('../controllers/systemUserController');

// CRUD endpoints
router.post('/', systemUserController.createUser);
router.get('/', systemUserController.getUsers);
router.get('/:id', systemUserController.getUser);
router.delete('/:id', systemUserController.deleteUser);

module.exports = router;