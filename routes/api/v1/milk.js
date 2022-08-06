const express = require('express');
const router = express.Router();
const milkController = require('../../../controller/api/v1/milk');

// @api route
router.get('/' , milkController.getMilkInfo);

// @api request to create milk info 
router.post('/create/:id' , milkController.createMilkInfo);
module.exports = router;