import React from "react";

export default function Counter() {
  return (
    <>
    
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">ICMP Ping Flood</h5>
              <p className="card-text">This alert is for ICMP ping flood.</p>
              <p className="card-text">Total Alerts: 10</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Last updated 7 mins ago
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">SSH Bruteforce Attack</h5>
              <p className="card-text">This alert is for SSH Bruteforce Attack.</p>
              <p className="card-text">Total Alerts: 20 </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Last updated 2 mins ago
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">ARP Spoofing</h5>
              <p className="card-text">This alert is for ARP spoofing.</p>
              <p className="card-text">Total Alerts: 15</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Last updated 1 mins ago
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
