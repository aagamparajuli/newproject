import React from "react";
import Nav from "./Navigation";
import image from "./assets/bgmt.jpg";

function Landing() {
  return (
    <>
      <div className="bg-[url('C:\Users\acer\Desktop\task\react\Wandermate\src\assets\bgmt.jpg')] h-screen bg-cover ">
        <Nav />
        <div className="text-2xl font-bold text-red-400 ps-8">
          <h2>Explore.</h2>
        </div>
        <div className="flex justify-center pt-60 text-[22px]] text-red-50" >
          <p>The Country of Himalays</p>
        </div>
        <div className="flex justify-center text-[80px] font-bold">
          <h1 className="text-red-400">NEP</h1>
          <h1 className="text-red-50">AL</h1>
        </div>
        <div className="div">
          <p className="text-red-50 pl-8 pt-52">
            Visit Nepal, You will never regret it.<br/> 
            This is something incredible, fanstastic<br/>
            mesmerizing and lifetime experience.
          </p>
        </div>
        <div className="flex justify-end space-x-8 pr-8 text-red-50">
          <p>FaceBook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Youtube</p>
          <p>Google</p>
        </div>
      </div>
    </>
  );
}

export default Landing;
