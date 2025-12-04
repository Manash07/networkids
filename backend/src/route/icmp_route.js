import express from "express";
import { getIcmpAlert } from "../controller/icmp_controller";

const router = express.Router();

router.get("/icmp", getIcmpAlert)

export default router;