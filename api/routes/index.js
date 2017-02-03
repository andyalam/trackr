const express = require('express');
const router = express.Router();

const ctrlTracking = require('../controllers/tracking');

router.post('/', ctrlTracking.index);

module.exports = router;
