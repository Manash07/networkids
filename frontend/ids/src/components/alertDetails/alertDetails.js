import React from "react";

export default function AlertDetails() {
  return (
    <>
      <div className="container-fluid px-0">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Source</th>
              <th scope="col">Timestamp</th>
              <th scope="col">Severity</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ICMP Ping flood</td>
              <td> 223.221.220.5</td>
              <td> 2023-12-24</td>
              <td> High </td>
              <td> Unresolved </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
