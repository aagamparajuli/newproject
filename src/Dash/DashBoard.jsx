import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home2 from "./home2";
import Hotel2 from "./hotel2";
import Travelpack2 from "./travelpack2";
import Booking2 from "./Booking2";
import Review2 from "./reviews2";

function DashBoard() {
  return (
    <div className="flex">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="paths">
        <Paths />
      </div>
    </div>
  );
}

export default DashBoard;


function SideBar() {
  return (
    <>
      <div className="flex">
        <div className="w-64 h-screen bg-gray-800 text-white">
          <h2 className="text-xl font-bold p-4">Wandermate</h2>
          <ul>
            <li className="px-4 py-2 hover:bg-gray-700"> 
              <Link to="/admin">DashBoard</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="dhotel">Hotel</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="dreview">Review</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="dbooking">Booking</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="dtravelPackage">Travel Packages</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}


function Paths() {
  return (
    <>
      <div className="path">
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="dhotel" element={<Hotel2 />} />
          <Route path="dreview" element={<Review2 />} />
          <Route path="dbooking" element={<Booking2 />} />
          <Route path="dtravelPackage" element={<Travelpack2 />} />
        </Routes>
      </div>
    </>
  );
}
