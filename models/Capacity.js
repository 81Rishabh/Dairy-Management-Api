const mongoose = require('mongoose');

const CapacitySchema = new mongoose.Schema({
    capacity : {
        type : Number,
        required : true,
        default : 0
    },
    date  : {
        type : Date,
        default : Date.now
    }
});


const capacity = mongoose.model('capacity' , CapacitySchema);
module.exports = capacity;