const ChargingStation = require('../models/ChargingStation');

exports.createStation = async (req, res) => {
  try {
    const station = new ChargingStation({
      ...req.body,
      userId: req.user
    });

    await station.save();
    res.status(201).json(station);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getAllStations = async (req, res) => {
  try {
    // console.log("UserId from token:", req.user); 
    const stations = await ChargingStation.find({ userId: req.user });
    res.json(stations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.updateStation = async (req, res) => {
  try {
    const station = await ChargingStation.findOneAndUpdate(
      { _id: req.params.id, userId: req.user },
      req.body,
      { new: true }
    );

    if (!station) return res.status(404).json({ message: "Station not found or unauthorized" });

    res.json(station);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.deleteStation = async (req, res) => {
  try {
    const station = await ChargingStation.findOneAndDelete({
      _id: req.params.id,
      userId: req.user 
    });

    if (!station) return res.status(404).json({ message: "Station not found or unauthorized" });

    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
