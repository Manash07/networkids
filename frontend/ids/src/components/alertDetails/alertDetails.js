"use client";

import { useEffect, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function AlertDetails({ refresh }) {
  const [getAlerts, setAlerts] = useState([]);

  const fetchAlerts = () => {
    fetch("http://localhost:5001/alerts")
      .then((res) => res.json())
      .then((data) => setAlerts(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAlerts();
  }, [refresh]);

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
          {getAlerts.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center text-muted">
                No ICMP alerts found
              </td>
            </tr>
          ) : (
            getAlerts.map((alert) => (
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
