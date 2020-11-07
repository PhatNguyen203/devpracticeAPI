const Bootcamps = require('../models/Bootcamps');
//@route    GET /api/v1/bootcamps
//@decs     display all bootcamps
//@access   public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamps.find();
    res.status(200).json({
      success: true,
      data: bootcamps
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
//@route    GET /api/v1/bootcamp/:id
//@decs     display the bootcamp by id
//@access   public
exports.getBootcampById = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamps.findById(req.params.id);
    console.log(bootcamp);
    if (!bootcamp) {
      return res.status(404).json({
        success: false,
        msg: 'Not Found!!!!'
      });
    }
    res.status(200).json({
      success: true,
      data: bootcamp
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
//@route    POST /api/v1/bootcamps
//@decs     insert a new bootcamp
//@access   public
exports.postBootcamp = async (req, res, next) => {
  const newBootcamp = await Bootcamps.create(req.body);
  res.status(201).json({
    success: true,
    data: newBootcamp
  });
};
//@route    PUT /api/v1/bootcamp/:id
//@decs     update the bootcamp by id
//@access   private
exports.putBootcampById = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `update the bootcamps with id = ${req.params.id}`
  });
};
//@route    DELETE /api/v1/bootcamp/:id
//@decs     delete the bootcamp by id
//@access   private
exports.deleteBootcampById = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `delete the bootcamps with id = ${req.params.id}`
  });
};
