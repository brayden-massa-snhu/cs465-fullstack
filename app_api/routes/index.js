const router = require("express").Router();

// Import controllers
const { getTrips, getTripByCode } = require("../controllers/trips");

// GET all trips
router.route("/trips").get(getTrips);

// Define route for our trips endpoint
router.route("/trips/:tripCode").get(getTripByCode);

module.exports = router;
