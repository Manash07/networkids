import React from "react";
import Sidebar from "./sidebar/sidebar";
import Counter from "./counter/counter";
import AlertDetails from "./alertDetails/alertDetails";

export default function Body() {
  return (
    <>
      <div className="container-fluid px-0">
        <div className="row justify-content-md-center border border-dark g-0 mx-0">
          <div className="col-2 border border-dark" id="Sidebar">
            <Sidebar />
          </div>
          <div
            className="col-10 border border-dark g-0 mx-0"
            id="Middlesection"
          >
            <div className="container text-center">
              <Counter />
            </div>
            <div className="container text-center mt-4 mb-4">
              <AlertDetails />
            </div>
            <div className="container text-center mt-4 mb-4">
              <h3> Statistics </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
