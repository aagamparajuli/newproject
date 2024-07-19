import React, { useEffect, useState } from "react";
import Nav from "./Navigation";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("http://localhost:3000/hotels");
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
      <div className="bg-[url('C:\Users\acer\Desktop\task\react\Wandermate\src\assets\bgmt.jpg')] h-screen bg-cover">
        <Nav />
        <div>
          <h1>Hotels</h1>
          {hotels.map((hotels) => (
            <li key={hotels.id}>
              <h2>Name: {hotels.name}</h2>
              <p>Price: Rs{hotels.price}</p>
              <p>Rating: {hotels.rating} stars</p>
              <img src={hotels.img} alt={hotels.name} style={{width:'500px', height:'300px'}}></img>
              <p>{hotels.desc}</p>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default HotelList;
