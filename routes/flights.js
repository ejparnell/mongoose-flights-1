var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flights');

router.get('/add', flightCtrl.add)

router.get('/', flightCtrl.index);

router.post('/', flightCtrl.create);

router.get('/:id', flightCtrl.show);

module.exports = router;
