import React from "react";
import HomeNav from "./HomeNav";
import haha from "./assets/userProfile.jpg";
import UsHotels from "./UsingSliceInHotels";
import UsTravelPackages from "./UsingSliceInTravelPack";
import UsThingsToDo from "./UsingSliceInThingsTodo";
import Footer from "./Footer";

function DestinationPage() {
  return (
    <>
      <HomeNav />
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
      <div className="topd">
        <div className="flex pl-14 pt-6">
          <img src={haha} className="w-12 h-12 rounded-full" />
          <button className="pl-2 font-bold">Things To Do</button>
        </div>
        <UsThingsToDo />
      </div>
      <Footer />
    </>
  );
}

export default DestinationPage;
