import express from "express";
import icmpRoute from "./route/icmp_route.js";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";

const app = express();

dotenv.config();

connectDatabase();

app.use(express.json())

const port = process.env.PORT || 5000;

app.use("/icmp", icmpRoute)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
