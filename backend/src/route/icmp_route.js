import express from "express";
import { getIcmpAlert, postIcmpAlert } from "../controller/icmp_controller.js";

const router = express.Router(); // Create a router for ICMP routes

router.get("/", getIcmpAlert) // Route to get all ICMP alerts
router.post("/",postIcmpAlert) // Route to post a new ICMP alert

export default router;