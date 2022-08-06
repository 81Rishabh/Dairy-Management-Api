const Order = require("../../../models/Orders");
const Capacity = require("../../../models/Capacity");

// controller for getting distributor info
module.exports.getOrders = async function (req, res) {
  try {
    // get all distributors
    let Orders = await Order.find({}).populate("milk_id");
    res.status(200).json({
      data: {
        total_order: Orders.length,
        orders: Orders,
      },
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

// controller for creating distributor collection
module.exports.createOrder = async function (req, res) {
  let { qty } = req.body;
  try {
    await Order.create(req.body);

    //  get capacity as per milk order
    let data = await Capacity.find({});

    // updateCapacity
    await Capacity.updateOne(
      { "_id": data[0]._id },
      {
        "$inc": { "capacity" : -qty },
      }
    );

    res.status(200).json({
      message: "created successfuly",
      success: true,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

// controller for update order Details
module.exports.updateOrder = async function (req, res) {
  const ID = req.params.id;
  try {
    await Order.findByIdAndUpdate(ID, req.body);
    res.status(500).json({
      message: "Updated Successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

// controller for delete order Details
module.exports.deleteOrder = async function (req, res) {
  const ID = req.params.id;
  try {
    await Order.findOneAndDelete(ID);
    res.status(500).json({
      message: "Deleted Successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};
