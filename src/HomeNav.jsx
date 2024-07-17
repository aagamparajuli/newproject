import React from "react";
import { Link } from "react-router-dom";
import haha from "./assets/userProfile.jpg"

function HomeNav() {
  return (
    <>
      <div className="flex justify-between items-center pl-14 pr-14 pt-4">
        <h1 className="text-xl font-bold text-blue-500">WanderMate</h1>
        <ul className="flex justify-center space-x-8 font-bold text-black">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/hotel">Hotel</Link>
          </li>
          <li>
            <Link to="/travelPackages">Travel Packages</Link>
          </li>
        </ul>
        <div className="flex items-center ">
            <h2 className="pr-2 text-medium font-bold">aagam07</h2>
            <img src={haha} className="w-12 h-12 rounded-full"/>
        </div>
      </div>
    </>
  );
}

export default HomeNav;
