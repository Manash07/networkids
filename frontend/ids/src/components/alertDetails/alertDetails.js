"use client";

import { useEffect, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function AlertDetails({ refresh }) {
  const [getAlerts, setAlerts] = useState([]); // State to hold fetched alerts

  const fetchAlerts = () => {
    fetch("http://localhost:5001/alerts") // Fetch all alerts from the backend by sending a GET request
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => setAlerts(data)) // Update state with fetched alerts to the getAlerts variable
      .catch((err) => console.error(err)); // Log any errors
  };

  useEffect(() => { // Since it depends on refresh, it automaticlly fetches new data when refresh changes
    fetchAlerts(); // Initial fetch of alerts when component mounts or refresh changes
  }, [refresh]); 
  
  /* [refresh] dependency to refetch alerts when refresh prop changes 
  
  I tried an empty dependency array [] but it didn't work as expected (needed refreshing on new alert) 
  So this use effect will run whenever the refresh prop (data sent by parent control) changes
  
  */ 

  return (
    <div
      className="table-responsive"
      style={{ maxHeight: "400px", overflowY: "auto" }}
    >
      <table className="table table-hover table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th>Reference Number</th>
            <th>Source IP</th>
            <th>Alert</th>
            <th>Timestamp</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {getAlerts.length === 0 ? ( // Display message if no alerts are found
            <tr>
              <td colSpan="6" className="text-center text-muted">
                No ICMP alerts found
              </td>
            </tr>
          ) : (
            getAlerts.map((alert) => ( // Map over alerts and display each in a table row
              <tr key={alert._id}>
                <td>{alert._id}</td>
                <td>{alert.ip}</td>
                <td>{alert.alert}</td>
                <td>{new Date(alert.createdAt).toLocaleString()}</td>
                <td>
                  <span className="badge text-bg-danger">Unresolved</span>
                </td>
                <td>
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    {/* Delete */}
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Delete Alert</Tooltip>}
                    >
                      <button className="btn btn-sm btn-outline-danger">
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </OverlayTrigger>

                    {/* Tips */}
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>{alert.tips}</Tooltip>}
                    >
                      <button className="btn btn-sm btn-outline-warning">
                        <i className="bi bi-lightbulb-fill"></i>
                      </button>
                    </OverlayTrigger>

                    {/* Resolve */}
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Mark as Resolved</Tooltip>}
                    >
                      <button className="btn btn-sm btn-outline-success">
                        <i className="bi bi-check-lg"></i>
                      </button>
                    </OverlayTrigger>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
