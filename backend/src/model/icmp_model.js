import mongoose from "mongoose";

/**
 * ICMP schema to store ICMP alerts with IP and alert message.
 */
const icmp_schema = new mongoose.Schema({

    ip:{
        type: String,
        required: true

    },
     alert:{
        type: String,
        required: true
     },

},

// Timestamp will help to know when the alert was created and updated although updated is not needed for this project.
{timestamps: true})


// Creating a model named Icmp using the icmp_schema but the collection in the database will be named "icmps" (plural form of Icmp).
const Icmp = mongoose.model("Icmp", icmp_schema) 

export default Icmp;