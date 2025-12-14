import React from "react";
import Sidebar from "./sidebar/sidebar";

export default function Body() {
  return (
    <>
      <div className="container-fluid px-0">
        <div className="row justify-content-md-center border border-dark g-0 mx-0">
          <div className="col-2 border border-dark" id="Sidebar">
            Col 1 Main
            <Sidebar />
          </div>
          <div className="col-10 border border-dark" id="Middlesection">
            Col 2 Main
          </div>
        </div>
      </div>
    </>
  );
}
