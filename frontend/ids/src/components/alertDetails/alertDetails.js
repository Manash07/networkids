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
            <th>Unique ID</th>
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
              <td colSpan="4">No ICMP alerts found</td>
            </tr>
          ) : (
            icmpAlerts.map((alert) => (
              <tr>
                <td>{alert._id}</td>
                <td>{alert.ip}</td>
                <td>{alert.alert}</td>
                <td>{new Date(alert.createdAt).toLocaleString()}</td>{" "}
                {/* Assuming createdAt is the timestamp field */}
                <td>
                  {" "}
                  <span className="badge rounded-pill text-bg-danger">
                    Unresolved
                  </span>{" "}
                </td>
                <td>
                  {" "}
                  <button type="button" className="btn btn-danger">
                    {" "}
                    <i className="bi bi-trash-fill"></i> Delete{" "}
                  </button>{" "}
                  <span>
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip>
                          This function is still under built. Will be out soon. Visit updates section for more details.
                        </Tooltip>
                      }
                    >
                      <button className="btn btn-success">
                        <i className="bi bi-check-circle-fill"></i> Resolved
                      </button>
                    </OverlayTrigger>
                  </span>{" "}
                  <span>
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip>
                        Since it is icmp
                        ping flood attack. The administrator is suggested to
                        close the port to prevent further attack
                        </Tooltip>
                      }
                    >
                      <button className="btn btn-warning">
                        <i className="bi bi-lightbulb-fill"></i>  Get tips
                      </button>
                    </OverlayTrigger>
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
