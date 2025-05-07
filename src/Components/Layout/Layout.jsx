// src/components/Layout/Layout.js
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
