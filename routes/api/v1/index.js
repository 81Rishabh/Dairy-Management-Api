const express = require('express');
const router = express.Router();

// @distributor route
router.use('/distributor' , require('./distributor'));
router.use('/milk' , require('./milk'));
router.use('/order' , require('./order'));
router.use('/capacity' , require('./capacity'));
module.exports = router;