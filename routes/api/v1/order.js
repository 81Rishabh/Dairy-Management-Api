const express = require('express');
const router = express.Router();
const orderController = require('../../../controller/api/v1/order');

// @api route
router.get('/' , orderController.getOrders);

// @post request to create milk info 
router.post('/add/:id' , orderController.createOrder);

// @put request for update orders details
router.put("/update/:id" , orderController.updateOrder);

// @put request for orders status
router.put("/updateStatus/:id" , orderController.updateOrder);

// @route for delete order
router.delete("/delete/:id" , orderController.deleteOrder);
module.exports = router;