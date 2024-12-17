const router = require("express").Router();

// Import controllers
const {
  getTrips,
  getTripByCode,
  addTrip,
  updateTrip,
} = require("../controllers/trips");

// Define route for our trips endpoint
router.route("/trips").get(getTrips).post(addTrip);

// GET Method routes getTripByCode
router.route("/trips/:tripCode").get(getTripByCode).put(updateTrip);

module.exports = router;
