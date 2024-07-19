import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeNav from "./HomeNav";
import TVPAbout from "./TVPAbout";

const TravelPackagesS = () => {
  const { id } = useParams();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch(`http://localhost:3000/travelPackages/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setHotels(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchHotel();
  }, [id]);

  return (
    <>
      <HomeNav />
      <div className="flex pl-14 pr-14 pt-6">
        <img className="rounded-lg shadow-xl"
          src={hotels.img}
          alt={hotels.name}
          style={{ width: "750px", height: "617px" }}
        ></img>
        <div className="grid grid-cols-2 gap-4 pl-4">
          <img className="rounded-lg shadow-xl"
            src={hotels.img}
            alt={hotels.name}
            style={{ width: "350px", height: "300px" }}
          ></img>
          <img className="rounded-lg shadow-xl"
            src={hotels.img}
            alt={hotels.name}
            style={{ width: "350px", height: "300px" }}
          ></img>
          <img className="rounded-lg shadow-xl"
            src={hotels.img}
            alt={hotels.name}
            style={{ width: "350px", height: "300px" }}
          ></img>
          <img className="rounded-lg shadow-xl"
            src={hotels.img}
            alt={hotels.name}
            style={{ width: "350px", height: "300px" }}
          ></img>
        </div>
      </div>
      <TVPAbout />
    </>
  );
};

export default TravelPackagesS;
