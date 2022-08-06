const express = require('express');
const router = express.Router();
const capacityController = require('../../../controller/api/v1/capacity');

// @api get route
router.get('/' , capacityController.getCapacity);

// @get capacity by Date
router.get('/:date' , capacityController.checkCapacity);

router.post('/add' , capacityController.addCapacity);

module.exports = router;