const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
     milk_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Milk'
     },
     qty : {
        type : Number,
        required : true
     },
     placed : {
        type : Boolean,
        required : true,
        default : false
     },
        packed : {
                type : Boolean,
                required : true,
                default : false
        },
        dispatched : {
                type : Boolean,
                required : true,
                default : false
        },
        delivered : {
                type : Boolean,
                required : true,
                default : false
        },
});

const Order = mongoose.model('orders' , OrderSchema);
module.exports = Order;