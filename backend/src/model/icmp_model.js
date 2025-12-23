import mongoose from "mongoose";

/**
 * ICMP schema to store ICMP alerts with IP and alert message.
 */

const icmp_schema = new mongoose.Schema({
  ip: { type: String, required: true },
  alert: { type: String, required: true }
}, { timestamps: true, strict: false });


// Creating a model named Icmp using the icmp_schema but the collection in the database will be named "icmps" (plural form of Icmp).
const Icmp = mongoose.model("Icmp", icmp_schema, "icmp_alerts") 

export default Icmp;