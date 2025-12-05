import express from "express";
import { getIcmpAlert } from "../controller/icmp_controller.js";

const router = express.Router();

router.get("/", getIcmpAlert)

export default router;