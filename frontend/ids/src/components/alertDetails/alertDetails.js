"use client";

import { useEffect, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

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
          <tr key="New">
            <th>Reference Number</th>
            <th>Source IP</th>
            <th>Alert</th>
            <th>Timestamp</th>
            <th> Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {icmpAlerts.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">
                No ICMP alerts found
              </td>
            </tr>
          ) : (
            icmpAlerts.map((alert) => (
              <tr key={alert._id}>
                <td>{alert._id}</td>
                <td>{alert.ip}</td>
                <td>
                  <span className="bg-danger text-white px-2 py-1 rounded">
                    {alert.alert}
                  </span>
                </td>
                <td>{new Date(alert.createdAt).toLocaleString()}</td>
                <td>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-status-${alert._id}`}>
                        This issue is yet to be solved. Click Resolved button if
                        solved.
                      </Tooltip>
                    }
                  >
                    <span className="badge rounded-pill text-bg-danger">
                      Unresolved
                    </span>
                  </OverlayTrigger>
                </td>
                <td className="d-flex gap-2">
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-delete-${alert._id}`}>
                        Click to delete the alert permanently.
                      </Tooltip>
                    }
                  >
                    <button type="button" className="btn btn-danger btn-sm">
                      <i className="bi bi-trash-fill"></i> Delete
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-resolve-${alert._id}`}>
                        This function is under development.
                      </Tooltip>
                    }
                  >
                    <button className="btn btn-success btn-sm">
                      <i className="bi bi-check-circle-fill"></i> Resolved
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-tips-${alert._id}`}>
                        Since it is ICMP ping flood, the admin should close the
                        port.
                      </Tooltip>
                    }
                  >
                    <button className="btn btn-warning btn-sm">
                      <i className="bi bi-lightbulb-fill"></i> Tips
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
