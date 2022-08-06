const Milk = require('../../../models/Milk');

// controller for getting distributor info
module.exports.getMilkInfo =  async function(req, res ) {
    try {
        // get all distributors
       let data =  await Milk.find({});
       res.status(200).json({
           data : {
            Milks : data
           },
           success : true
       });
    } catch (error) {
       res.status(500).json({
           message : 'Something went wrong',
           success : false,
       })
    }
}


// controller for creating distributor collection
module.exports.createMilkInfo =  async function(req, res){
    try {
        await Milk.create(req.body);
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

