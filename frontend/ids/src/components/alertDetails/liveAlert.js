"use client";

import React, { useEffect, useState } from "react"; // must import React
import { socket } from "../../service/socket.js";

export default function LiveAlert() {
  const [alerts, setAlerts] = useState([]); // State to hold live alerts

  useEffect(() => {
    // Listen for live alerts from backend when backend emits 'live_alert' event
    socket.on("live_alert", (data) => { 
      setAlerts((prev) => [ //
        {
          id: Date.now(), // unique key
          ip: data.ip,
          count: data.packet_count,
          message: data.message,
          timestamp: new Date(data.timestamp.toLocaleString()),
        },
        ...prev, /* Append new alert to the beginning of the alerts array, basically a spread operator
        
        Ensures the most recent alerts appear at the top of the list
        
        */
      ]);
    });

    // Cleanup on unmount
    return () => {
      socket.off("live_alert");
    };
  }, []);

  return (
    <div className="container-fluid px-0">
      <h3> Live Alerts</h3>
      {alerts.length === 0 && <p>No alerts yet</p>}
      <table className="table">
        <thead>
          <tr key="new_type">
            <th>Source IP</th>
            <th> Count </th>
            <th>Alert</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((a) => (
            <tr key={a.id}>
              <td> {a.ip}</td>
              <td> Packet count is: {a.count} in less than threshold time.</td>
              <td> {a.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
