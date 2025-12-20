"use client";

import { useEffect, useState } from "react";

export default function AlertDetails() {
  const [icmpAlerts, setIcmpAlerts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/icmp")
      .then((res) => res.json())
      .then((data) => setIcmpAlerts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container-fluid px-0">
      <table className="table">
        <thead>
          <tr>
            <th>Unique ID</th>
            <th>Source IP</th>
            <th>Alert</th>
            <th>Timestamp</th>
          </tr>
        </thead>

        <tbody>
          {icmpAlerts.length === 0 ? (
            <tr>
              <td colSpan="4">No ICMP alerts found</td>
            </tr>
          ) : (
            icmpAlerts.map((alert) => (
              <tr key={alert._id}>
                <td>{alert._id}</td>
                <td>{alert.ip}</td>
                <td>{alert.alert}</td>
                <td>{new Date(alert.createdAt).toLocaleString()}</td> {/* Assuming createdAt is the timestamp field */}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

