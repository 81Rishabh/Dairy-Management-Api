const capacity = require('../../../models/Capacity');
const Milk = require('../../../models/Milk');

// controller for get capacity details
module.exports.getCapacity = async function(req, res){
    try {
     // create capacity
    let data = await capacity.find({});
     res.status(201).json({
         success : "true",
         data : {
            capacity : data
         }
     });
     
    } catch (error) {
     res.status(500).json({
         message : 'Something went wrong',
         success : false
     })
    }
 }


//  controller for add capacity
module.exports.addCapacity = async function(req, res){
   try {
    const getCapacity = await capacity.find({});
    let data =  await Milk.aggregate([
        {
            $group : {
                "_id" : "null",
                "capacity" : {
                   $sum : "$qty"
                }
            }
        }
    ]);
    
    
    if(getCapacity) {
          let ID = getCapacity[0]._id;
            //  update the capacity
            await capacity.findByIdAndUpdate(ID, {
                capacity : data[0].capacity
            });
        }
        else {
            // create capacity
            await capacity.create({
                capacity : data[0].capacity
        });
    }
    
    res.status(201).json({
        message : 'capacity Added',
        success : "true"
    });
   } catch (error) {
        res.status(500).json({
            message : 'Something went wrong',
            success : false
       })
   }
}

// controller for check capacity status
module.exports.checkCapacity = async function(req,res) {
    try {
        // create capacity
       let data = await capacity.find({date : req.params.date});
        res.status(201).json({
            success : "true",
            data : {
               capacity : data
            }
        });
        
       } catch (error) {
        res.status(500).json({
            message : 'Something went wrong',
            success : false
        })
    }
}