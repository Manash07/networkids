import express from "express";
import { Heuristic } from "../model/schema.js";
import {
  getHeuristicConfig,
  updateHeuristicConfig,
} from "../controller/heuristic_controller.js";

const router = express.Router();

// Inline GET route to fetch heuristic config
router.get("/", async (req, res) => {
  try {
    const config = await Heuristic.findById("icmp_heuristic");

    if (!config) return res.json({ message: "No heuristic config found" });

    const formattedConfig = {
      _id: config._id,
      threshold: config.threshold,
      time_window: config.time_window,
      cooldown: config.cooldown,
      interface: config.interface,
      createdAt: config.createdAt,
      updatedAt: config.updatedAt,
    };

    res.json(formattedConfig);
  } catch (err) {
    console.error("Error fetching heuristic config:", err);
    res.status(500).json({ error: err.message });
  }
});

// Controller fallback (optional, similar to Alert pattern)
router.get("/", getHeuristicConfig);

// POST route to update heuristic config
router.post("/", updateHeuristicConfig);

export default router;
