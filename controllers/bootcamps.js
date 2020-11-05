//@route    GET /api/v1/bootcamps
//@decs     display all bootcamps
//@access   public
exports.getBootcamps = (req, res) => {
  res.status(200).json({ success: true, msg: 'display all bootcamps' });
};
//@route    GET /api/v1/bootcamp/:id
//@decs     display the bootcamp by id
//@access   public
exports.getBootcampById = (req, res) => {
  res.status(200).json({
    success: true,
    msg: `display the bootcamps with id = ${req.params.id}`
  });
};
//@route    POST /api/v1/bootcamps
//@decs     insert a new bootcamp
//@access   public
exports.postBootcamp = (req, res) => {
  res.status(200).json({ success: true, msg: 'insert a new bootcamp' });
};
//@route    PUT /api/v1/bootcamp/:id
//@decs     update the bootcamp by id
//@access   private
exports.putBootcampById = (req, res) => {
  res.status(200).json({
    success: true,
    msg: `update the bootcamps with id = ${req.params.id}`
  });
};
//@route    DELETE /api/v1/bootcamp/:id
//@decs     delete the bootcamp by id
//@access   private
exports.deleteBootcampById = (req, res) => {
  res.status(200).json({
    success: true,
    msg: `delete the bootcamps with id = ${req.params.id}`
  });
};
