import express from "express";
import icmpRoute from "./route/icmp_route.js";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express(); // Create an Express application

dotenv.config(); // Load environment variables from .env file



app.use(express.json()) // Middleware to parse JSON request bodies

app.use(rateLimiter); // Apply the rate limiting middleware to all incoming requests


const port = process.env.PORT || 5000; // Define the port to run the server and alternative port if not specified in environment variables

app.use("/icmp", icmpRoute) // Use the ICMP routes for any requests to /icmp



// Start the server and listen on the specified port

connectDatabase().then(() => {

  app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

})
