import React from "react";
import logo from "./images/logo1.jpg";

const Loader = () => {
  return (
    <div className="container-fluid" style={{ overflowX: "hidden" }}>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <img
          src={logo}
          className="mb-3 img-fluid"
          style={{ height: "100px", width: "150px" }}
          alt=""
        />
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Loader;
