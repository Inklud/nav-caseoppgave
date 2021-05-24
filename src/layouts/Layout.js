import React from "react";
import Navbar from "../components/Navbar";
import "../assets/css/Layout.less";

const Layout = ({ children }) => {
  return (
    <div className="main">
      <Navbar />
      <main style={{ marginTop: "20px" }}>{children} </main>
    </div>
  );
};

export default Layout;
