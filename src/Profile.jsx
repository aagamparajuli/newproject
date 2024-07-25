import React from "react";
import HomeNav from "./HomeNav";
import haha from "./assets/userProfile.jpg";


function Profile() {
  

  return (
    <>
      <HomeNav />
      <div className="all">
        <div className="cpe">
            <img src={haha} />
            <button className="bg-black text-white">Edit Profile</button>

        </div>
        <div className="bio">
            <h1>Aagam</h1>
            <p>I am a software engineer from India.</p>
        </div>
        <div className="HB">
            <h2>Hotel Bookings</h2>
        </div>
        <div className="TP">
            <h2>Travel Packages</h2>
        </div>
      </div>
    </>
  );
}

export default Profile;
