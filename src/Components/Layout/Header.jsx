// src/components/Layout/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        {/* Placeholder for profile or logout */}
        <div>User</div>
      </div>
    </header>
  );
};

export default Header;
