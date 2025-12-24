import React from "react";

export default function Sidebar() {
  return (
    <div className="d-flex flex-column p-2 text-white bg-dark vh-100 shadow">
      <span className="fs-4 fw-bold text-center mb-4">
        <i className="bi bi-shield-lock-fill text-danger me-2"></i>
        Network IDS
      </span>

      <ul className="nav nav-pills flex-column gap-2">
        <li className="nav-item">
          <a
            href="/"
            className="nav-link active bg-danger d-flex align-items-center"
          >
            <i className="bi bi-bell-fill me-2"></i>
            Live Alerts
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white d-flex align-items-center disabled">
            <i className="bi bi-gear-fill me-2"></i>
            Settings
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white d-flex align-items-center disabled">
            <i className="bi bi-arrow-repeat me-2"></i>
            Updates
          </a>
        </li>
      </ul>
    </div>
  );
}
