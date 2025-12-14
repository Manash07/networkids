import React from "react";

export default function Sidebar() {
  return (
    <>
      <ul className="nav flex-column" id="buttonlist">
        <li className="nav-item" >
          <a className="nav-link active" aria-current="page" href="#">
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Alerts
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Analytics
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-disabled="true">
            {" "}
            Settings{" "}
          </a>
        </li>
      </ul>
    </>
  );
}
