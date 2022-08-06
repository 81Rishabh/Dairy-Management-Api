const mongoose = require('mongoose');

const MilkSchema = new mongoose.Schema({
   qty : {
       type : Number,
       required : true,
   },
   price : {
       type : Number,
       required : true
   },
   measure : {
     type : String,
     require : true,
   },
   distributor : {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'distributor'
   }
} , {timestamps : true});


const Milk = mongoose.model('Milk' , MilkSchema);
module.exports = Milk;