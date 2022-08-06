const mongoose = require('mongoose');

const DistributerSchema = new mongoose.Schema({
   name : {
       type : String,
       required : true,
   },
   contact_no : {
      type : String,
     required : true
   },
   address : {
     type : String,
     required : true
   }
} , {timestamps : true});


const Distributor = mongoose.model('distributor' , DistributerSchema);
module.exports = Distributor;