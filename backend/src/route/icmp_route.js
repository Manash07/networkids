import express from "express";
import Icmp from "../model/icmp_model.js"; // adjust path

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const alerts = await Icmp.find({});

    if (!alerts.length) return res.json({ message: "No ICMP alerts found" });

    const formatted = alerts.map(a => ({
      _id: a._id,
      ip: a.ip,
      alert: a.message,
      createdAt: new Date(a.timestamp),
      tips: a.tips
    }));

    res.json(formatted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
