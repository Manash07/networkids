"use client";

import express from "express";
import icmpRoute from "./route/icmp_route.js";
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

app.use("/icmp", icmpRoute);

// ================= SOCKET.IO SETUP ================= //

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // or your React frontend URL
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Socket client connected:", socket.id);

  socket.on("live_alert", (data) => {
    console.log("Live ICMP alert received:", data);

    // Broadcast alert to all connected clients
    io.emit("live_alert", data);
  });

  socket.on("disconnect", () => {
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
