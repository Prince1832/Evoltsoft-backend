const express = require('express');
const router = express.Router();
const {
  createStation,
  getAllStations,
  updateStation,
  deleteStation
} = require('../controllers/stationController');

const protect = require('../middleware/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Charging Stations
 *   description: Manage EV charging stations
 */

/**
 * @swagger
 * /api/chargers:
 *   get:
 *     summary: Get all charging stations
 *     tags: [Charging Stations]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of charging stations
 *       401:
 *         description: Unauthorized
 */
router.get('/', protect, getAllStations);

/**
 * @swagger
 * /api/chargers:
 *   post:
 *     summary: Create a new charging station
 *     tags: [Charging Stations]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - powerOutput
 *               - connectorType
 *             properties:
 *               name:
 *                 type: string
 *               powerOutput:
 *                 type: number
 *               connectorType:
 *                 type: string
 *     responses:
 *       201:
 *         description: Station created
 *       401:
 *         description: Unauthorized
 */
router.post('/', protect, createStation);

/**
 * @swagger
 * /api/chargers/{id}:
 *   put:
 *     summary: Update a charging station
 *     tags: [Charging Stations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Station ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               powerOutput:
 *                 type: number
 *               connectorType:
 *                 type: string
 *     responses:
 *       200:
 *         description: Station updated
 *       401:
 *         description: Unauthorized
 */
router.put('/:id', protect, updateStation);

/**
 * @swagger
 * /api/chargers/{id}:
 *   delete:
 *     summary: Delete a charging station
 *     tags: [Charging Stations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Station ID
 *     responses:
 *       200:
 *         description: Station deleted
 *       401:
 *         description: Unauthorized
 */
router.delete('/:id', protect, deleteStation);

module.exports = router;
