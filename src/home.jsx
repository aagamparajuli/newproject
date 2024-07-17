import React, { useEffect, useState } from "react";
import HomeNav from "./HomeNav";
import SearchBox from "./search";
import haha from "./assets/userProfile.jpg";
import UsDestination from "./UsingSliceInDest";
import UsHotels from "./UsingSliceInHotels";
import UsTravelPackages from "./UsingSliceInTravelPack";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <HomeNav />
      <div className="pl-14 pr-14 pt-6 ">
        <div className="bg-[url('C:\Users\acer\Desktop\task\react\Wandermate\src\assets\headerImg9.jpg')] h-screen bg-cover rounded-lg">
          <SearchBox />
        </div>
      </div>
      <div className="topd">
        <div className="flex pl-14 pt-10">
        <img src={haha} className="w-12 h-12 rounded-full" />
        <button className="pl-2 font-bold">Top Destinations</button>
        </div>
        <UsDestination />
      </div>
      <div className="topd">
        <div className="flex pl-14 pt-6">
        <img src={haha} className="w-12 h-12 rounded-full" />
        <button className="pl-2 font-bold">Top Hotels</button>
        </div>
        <UsHotels />
      </div>
      <div className="topd">
        <div className="flex pl-14 pt-6">
        <img src={haha} className="w-12 h-12 rounded-full" />
        <button className="pl-2 font-bold">Top Travel Packages</button>
        </div>
        <UsTravelPackages />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
