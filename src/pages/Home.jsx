import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#f4f4f4",
        textAlign: "center",
      }}
    >
      <h1>Welcome to React Intern Assignment</h1>
      <p>This is the Home Page (as per Adobe XD design)</p>

      <Link
        to="/details"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Go to Details Page
      </Link>
    </div>
  );
};

export default Home;
