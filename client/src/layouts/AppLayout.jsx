import React, { Children, useState } from "react";
import NavBar from "../components/NavBar";

const AppLayout = ({ children, setIsOpen }) => {
  return (
    <div className="w-full h-full ">
      <NavBar setIsOpen={setIsOpen} />
      <main className="bg-[#F2F2F2] h-full">{children}</main>
    </div>
  );
};

export default AppLayout;
