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
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id="unresolved-tooltip">
                        This issue is yet to be solved. If it is resolved click
                        Resolved button in the Action column.
                      </Tooltip>
                    }
                  >
                    <span className="d-inline-block">
                      <span className="badge rounded-pill text-bg-danger">
                        Unresolved
                      </span>
                    </span>
                  </OverlayTrigger>
                </td>
                <td>
                  {" "}
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id="unresolved-tooltip">
                        Click to delete the alert from the record permanently.
                      </Tooltip>
                    }
                  >
                    <span>
                      <button type="button" className="btn btn-danger">
                        {" "}
                        <i className="bi bi-trash-fill"></i> Delete{" "}
                      </button>{" "}
                    </span>
                  </OverlayTrigger>
                  <span>
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip style={{color:"red"}}>
                         ! *** This function is still under development and is
                          expected to be out soon. Visit updates section for
                          more details *** !
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
                          Since it is icmp ping flood attack. The administrator
                          is suggested to close the port to prevent further
                          attack
                        </Tooltip>
                      }
                    >
                      <button className="btn btn-warning">
                        <i className="bi bi-lightbulb-fill"></i> Get tips
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
