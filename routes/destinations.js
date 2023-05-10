const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations')

router.post('/:flightId', destinationsCtrl.create)

module.exports = router;