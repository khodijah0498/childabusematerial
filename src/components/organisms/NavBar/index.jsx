import React, { useState } from "react";
import "./NavBarStyles.css"
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const tabs = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
        name: "Contact Us",
        link: "/contact",
    }
  ];
  return (
    <div className="flex justify-between w-[100%] m-auto items-center cursor-pointer fixed z-10 bg-white">
      <div className="logo"><img src="../../../../images/ZERAB REPORT LOGO 1.png" alt="logo" className="h-40" /></div>
      <div className="flex">
        {tabs.map(({ name, link }, index) => (
          <div key={index} onClick={() => navigate(link)} className="p-5">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
