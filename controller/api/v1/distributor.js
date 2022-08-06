const Distributer = require('../../../models/Distributor');

// controller for getting distributor info
module.exports.getDistributorInfo =  async function(req, res ) {
    try {
        // get all distributors
       let distributor =  await Distributer.find({});
       res.status(200).json({
           data : {
             distributor : distributor
           },
           success : true
       });
    } catch (error) {
       res.status(500).json({
           message : 'Something went wrong',
           success : false
       })
    }
}

// controller for creating distributor collection
module.exports.createDistributor =  async function(req, res){
     try {
         await Distributer.create(req.body);
         res.status(200).json({
            message : 'created successfuly',
            success : true
        });
     } catch (error) {
        res.status(500).json({
            message : 'Something went wrong',
            success : false
        })
     }
}

