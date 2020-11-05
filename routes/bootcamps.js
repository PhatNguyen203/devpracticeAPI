const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'display all bootcamps' });
});

router.get('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `display the bootcamp with id ${req.params.id}`
  });
});

router.post('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'insert a new bootcamp' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `update the bootcamp with id ${req.params.id}`
  });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `delete the bootcamp with id ${req.params.id}`
  });
});

module.exports = router;
