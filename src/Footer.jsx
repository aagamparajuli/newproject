import React from "react";

function Footer() {
  return (
    <>
      <div className="pr-14 pl-14 pt-10 pb-14">
        <div className="bg-white shadow-2xl p-6">
          <footer className="flex justify-around pb-6 ">
            <div className="text-lg">
              <h1 className="font-bold pb-6">About WanderMate</h1>
              <p>About Us</p>
              <p>Home</p>
              <p>Destinations</p>
              <p>Tours</p>
              <p>Hotels</p>
            </div>
            <div className="text-lg">
              <h1 className="font-bold pb-6">Explore</h1>
              <p>Flights</p>
              <p>Car Rentals</p>
              <p>Activities</p>
              <p>Deals</p>
            </div>
            <div className="col3 text-lg">
              <h1 className="font-bold pb-6">Trip-Advisor Sites</h1>
              <p>Contact Us</p>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
            </div>
          </footer>
          <p className="font-bold flex justify-center">Copyright © 2021 Wandermate. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
