"use client"

import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:5001"; // your backend Socket.IO server URL

export const socket = io(SOCKET_URL, {
  transports: ["websocket"],
  autoConnect: true,
});
