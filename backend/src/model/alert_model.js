import mongoose from "mongoose";

/**
 * Alert schema to store alerts with IP and alert message.
 */

const alert_schema = new mongoose.Schema(
  {
    ip: { type: String, required: true },
    alert: { type: String, required: true },
  },
  { timestamps: true, strict: false }
);

// Creating a model named Alert using the alert_schema but the collection in the database will be named "Alerts" 
// (plural form of Alert).

const Alert = mongoose.model("Alert", alert_schema, "alerts");

export default Alert;
