const express = require('express');
const { chatGenerator } = require('../controllers/openaiController')
const router = express.Router();

router.post('/chat', chatGenerator);

module.exports = router;