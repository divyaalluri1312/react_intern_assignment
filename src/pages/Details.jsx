import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#e9ecef",
        textAlign: "center",
      }}
    >
      <h1>Details Page</h1>
      <p>This is where detailed content will appear.</p>

      <Link
        to="/"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Details;
