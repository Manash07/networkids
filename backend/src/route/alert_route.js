import express from "express";
import Alert from "../model/alert_model.js";
import {
  getIntrusionAlert,
  postIntrusionAlert,
} from "../controller/alert_controller.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const alerts = await Alert.find();

    if (!alerts.length) return res.json({ message: "No any alerts found" });

    const formattedAlerts = alerts.map((a) => ({
      _id: a._id,
      ip: a.ip,
      alert: a.message,
      createdAt: a.timestamp,
      tips: a.tips,
      type: a.type,
    }));

    res.json(formattedAlerts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/", getIntrusionAlert);
router.post("/", postIntrusionAlert);

export default router;
