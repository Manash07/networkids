import express from "express";
import alerts from "./route/alert_route.js";
import heuristic from "./route/heuristic_route.js";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

import http from "http";
import { Server } from "socket.io";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(rateLimiter);

const port = process.env.PORT || 5000;

app.use("/alerts", alerts); // Mount the alerts route at /alerts


app.use("/heuristic", heuristic); // Mount the heuristic route at /heuristic


// ================= SOCKET.IO SETUP ================= //

const server = http.createServer(app); // It wraps the express app in the HTTP server.
/**
  * Socket.IO server setup to handle real-time communication.
 */

const io = new Server(server, { 
  cors: {
    origin: "*", // It is basically protocol(http) + domain(localhost/IP) + port(3000 or 5000)
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => { // When a client connects
  console.log("Socket client connected:", socket.id); 

  socket.on("live_alert", (data) => { // Listen for live alerts from clients
    console.log("Live alerts received:", data);

    // Broadcast alert to all connected clients
    io.emit("live_alert", data);
  });

  socket.on("disconnect", () => { // When a client disconnects
    console.log("Socket client disconnected:", socket.id); 
  });
});

// =================================================== //

// Start server AFTER DB connects
connectDatabase().then(() => {
  server.listen(port, () => {
    console.log(`Server + Socket.IO running at http://localhost:${port}`);
  });
});
