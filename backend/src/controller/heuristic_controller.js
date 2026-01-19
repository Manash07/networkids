import {Heuristic} from "../model/schema.js"; // imported from combined model file

// Controller function to get the current IDS heuristic configuration
export async function getHeuristicConfig(req, res) {
  try {
    const config = await Heuristic.findById("icmp_heuristic"); // Fetch the single config document

    if (!config) {
      return res.status(404).json({ message: "Heuristic config not found" });
    }

    res.status(200).json(config); // Return config as JSON
  } catch (error) {
    console.error("Error fetching heuristic config:", error);
    res.status(500).json({ error: error.message });
  }
}

// Controller function to update IDS heuristic parameters
export async function updateHeuristicConfig(req, res) {
  try {
    const { threshold, time_window, cooldown, interface: iface } = req.body;

    const updated = await Heuristic.findByIdAndUpdate(
      "icmp_heuristic", // fixed ID
      {
        threshold,
        time_window,
        cooldown,
        interface: iface,
      },
      { new: true, upsert: true } // create if doesn't exist
    );

    res.status(200).json({ message: "Heuristic updated", config: updated });
  } catch (error) {
    console.error("Error updating heuristic config:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
