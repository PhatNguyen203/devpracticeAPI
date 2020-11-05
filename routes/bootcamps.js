const express = require('express');
const router = express.Router();
const {
  getBootcamps,
  getBootcampById,
  postBootcamp,
  putBootcampById,
  deleteBootcampById
} = require('../controllers/bootcamps');

router.route('/').get(getBootcamps).post(postBootcamp);

router
  .route('/:id')
  .get(getBootcampById)
  .put(putBootcampById)
  .delete(deleteBootcampById);

module.exports = router;
