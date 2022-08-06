const express = require('express');
const router = express.Router();

// @api route
router.use('/api' , require('./api/index'));
module.exports = router;