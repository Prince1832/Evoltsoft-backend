const express = require('express');
const router = express.Router();
const {
  createStation,
  getAllStations,
  updateStation,
  deleteStation
} = require('../controllers/stationController');

const protect = require('../middleware/authMiddleware');

router.get('/', protect, getAllStations);

router.post('/', protect, createStation);
router.put('/:id', protect, updateStation);
router.delete('/:id', protect, deleteStation);

module.exports = router;
