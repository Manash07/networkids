"use client";

import { useEffect, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function AlertDetails({ refresh }) {
  const [icmpAlerts, setIcmpAlerts] = useState([]);

  const fetchIcmpAlerts = () => {
    fetch("http://localhost:5001/icmp")
      .then((res) => res.json())
      .then((data) => setIcmpAlerts(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchIcmpAlerts();
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
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {icmpAlerts.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center text-muted">
                No ICMP alerts found
              </td>
            </tr>
          ) : (
            icmpAlerts.map((alert) => (
              <tr key={alert._id}>
                <td>{alert._id}</td>
                <td>{alert.ip}</td>
                <td>{alert.alert}</td>
                <td>{new Date(alert.createdAt).toLocaleString()}</td>

                <td>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>This issue is yet to be solved.</Tooltip>}
                  >
                    <span className="badge rounded-pill text-bg-danger">
                      Unresolved
                    </span>
                  </OverlayTrigger>
                </td>

                <td className="d-flex gap-2">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Delete alert permanently</Tooltip>}
                  >
                    <button className="btn btn-danger btn-sm">
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Mark as resolved</Tooltip>}
                  >
                    <button className="btn btn-success btn-sm">
                      <i className="bi bi-check-circle-fill"></i>
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>
                        ICMP flood detected. Consider blocking ping.
                      </Tooltip>
                    }
                  >
                    <button className="btn btn-warning btn-sm">
                      <i className="bi bi-lightbulb-fill"></i>
                    </button>
                  </OverlayTrigger>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
