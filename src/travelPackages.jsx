import React, { useEffect, useState } from "react";
import HomeNav from "./HomeNav";
import Footer from "./Footer";

const TravelPackages = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("http://localhost:3000/travelPackages");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setHotels(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <HomeNav />
      <div className="pr-14 pl-14 pt-7">
        {hotels.map((hotels) => (
          <div key={hotels.id}>
            <div className="bg-white mb-8 shadow-2xl flex rounded-xl ">
              <div className="img">
                <img className="rounded-l-xl"
                  src={hotels.img}
                  alt={hotels.name}
                  style={{ width: "500px", height: "300px" }}
                ></img>
              </div>
              <div className="flex-col content-center">
                <div className="pl-80">                    
                  <div className="pb-2 font-bold text-2xl">
                    <h2>{hotels.name}</h2>
                  </div>
                  <div className="pb-2 pl-16 text-xl font-bold">
                    <p>$ {hotels.price}</p>
                  </div>
                  <div className="pb-2 pt-2">
                    <button className=" bg-blue-500 rounded-lg text-white font-bold p-3 pr-14 pl-14">View Deal</button>
                  </div>
                  <div className="pt-2">
                    <div className="flex ">
                      <img
                        className="w-3 h-4 "
                        src="https://cdn-icons-png.flaticon.com/128/3705/3705788.png"
                      />
                      <p className="pl-2 pb-2">{hotels.freeCancellation} Free Cancellation</p>
                    </div>
                    <div className="flex">
                      <img
                        className="w-3 h-4"
                        src="https://cdn-icons-png.flaticon.com/128/3705/3705788.png"
                      />
                      <p className="pl-2 pb-2">{hotels.reserveNow} Reserve now, pay at stay</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default TravelPackages;
