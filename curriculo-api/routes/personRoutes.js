const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

// GET para listar pessoas
router.get('/', personController.getAll);

// POST para criar uma nova pessoa
router.post('/', personController.createPerson);

module.exports = router;
