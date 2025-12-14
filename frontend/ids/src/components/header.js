import React from "react";

export default function Head() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ backgroundColor: "#e3f2fd" }}
        data-bs-theme="light"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            NetworKids
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success disabled opacity-25" style={{color:"red", borderColor:"red", }} type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
