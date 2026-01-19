import mongoose from "mongoose";

/**
 * Alert schema to store alerts with IP and alert message.
 */

const alert_schema = new mongoose.Schema(
  {
    ip: { type: String, required: true }, // Source IP address
    alert: { type: String, required: true }, // Alert message
  },

  { timestamps: true, strict: false }
    /* Allow strict false offers flexibility in the schema by permitting additional fields 
    from the python script */
);

const heuristic_schema = new mongoose.Schema(
  {
    _id: { type: String, default: "icmp_heuristic" }, // single document ID
    threshold: { type: Number, required: true, default: 100 },
    time_window: { type: Number, required: true, default: 5 },
    cooldown: { type: Number, required: true, default: 10 },
    interface: { type: String, required: true, default: "any" },
  },
  { timestamps: true, strict: false }
);

// Creating a model named Alert using the alert_schema but the collection in the
//  database will be named "Alerts" 
// (plural form of Alert).

const Alert = mongoose.model("Alert", alert_schema, "alerts");

const Heuristic = mongoose.model("Heuristic", heuristic_schema, "heuristics");

export { Alert, Heuristic };
