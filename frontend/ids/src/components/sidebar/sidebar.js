import React from "react";

export default function Sidebar() {
  return (
    <>
      <ul className="nav flex-column" id="buttonlist">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Live Alerts
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-disabled="true">
            {" "}
            Settings{" "}
          </a>
        </li>
              <li className="nav-item">
          <a className="nav-link" aria-disabled="true">
            {" "}
            Updates {" "}
          </a>
        </li>
      </ul>
    </>
  );
}
