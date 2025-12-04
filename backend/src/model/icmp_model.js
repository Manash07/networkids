import mongoose from "mongoose";

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

{timestamps: true})

const Icmp = mongoose.model("Icmp", icmp_schema)
export default Icmp;