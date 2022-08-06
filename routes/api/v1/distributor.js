const express = require('express');
const router = express.Router();
const distributorController = require('../../../controller/api/v1/distributor');

// @api get route
router.get('/' , distributorController.getDistributorInfo);

// @create distributor
router.post('/create' , distributorController.createDistributor);

module.exports = router;