import express from "express";
import {Alert} from "../model/schema.js";
import {
  getIntrusionAlert,
  postIntrusionAlert,
} from "../controller/alert_controller.js";

const router = express.Router();

/** This block of code actually fetches data and is the running code and also working as controller */

/** *********************************************************************************** */

router.get("/", async (req, res) => { // Fetch all alerts from the database
  try {
    const alerts = await Alert.find();

    if (!alerts.length) return res.json({ message: "No any alerts found" });

    const formattedAlerts = alerts.map((a) => ({ // Format each alert for the response
      _id: a._id,
      ip: a.ip,
      alert: a.message,
      createdAt: a.timestamp,
      tips: a.tips,
      type: a.type,
    }));

    res.json(formattedAlerts); // Send formatted alerts as JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

/** ***************************************************************************************************** */



router.get("/", getIntrusionAlert); // Get all intrusion alerts using the controller function (dead code but kept for future use)
router.post("/", postIntrusionAlert); // Post a new intrusion alert using the controller function (dead code but kept for future use)

export default router;
