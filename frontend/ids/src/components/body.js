"use client";

import React from "react";
import Sidebar from "./sidebar/sidebar";
import Counter from "./counter/counter";
import AlertDetails from "./alertDetails/alertDetails";
import LiveAlerts from "./alertDetails/liveAlert";

export default function Body() {
  const [refreshAlerts, setRefreshAlerts] = React.useState(0);

  return (
    <div className="container-fluid px-0">
      <div className="row g-0 min-vh-100">
        {/* Sidebar */}
        <div className="col-2 bg-dark">
          <Sidebar />
        </div>

        {/* Middle Section */}
        <div className="col-10 bg-light p-4">
          {/* Header + Refresh */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold mb-0">
              <i className="bi bi-speedometer2 me-2 text-danger"></i>
              Security Dashboard
            </h4>
          </div>

          {/* Counter */}
          <div className="card shadow-sm mb-4">
            <div className="card-body text-center">
              <Counter />
            </div>
          </div>

          {/* Alert Details (MongoDB refreshes ONLY here) */}
          <div className="card shadow-sm mb-4">
            <div className="card-header fw-semibold bg-white">
              Alert Details
            </div>
            <div className="card-body">
              <AlertDetails refresh={refreshAlerts} />
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => setRefreshAlerts(refreshAlerts + 1)}
              >
                <i className="bi bi-arrow-clockwise me-1"></i>
                Refresh Alerts
              </button>
            </div>
          </div>

          {/* Live Alerts */}
          <div className="card shadow-sm">
            <div className="card-header bg-danger text-white fw-semibold">
              <i className="bi bi-bell-fill me-2"></i>
              Live Alerts
            </div>
            <div className="card-body">
              <LiveAlerts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
