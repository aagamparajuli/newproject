import React, { useEffect, useState } from "react";
import Nav from "./Navigation";


const ThingsToDo = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchHotels = async () => {
        try {
          const response = await fetch("http://localhost:3000/thingsToDo");
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
        <Nav />
        <div className="bg">
  
          <div className=" p-10 pt-96">
            <div className="p-6 bg-white rounded-lg shadow-2xl ">
              <h1>Things To Do</h1>
              <div className="grid grid-cols-3 gap-8 ">
                {hotels.map((hotels) => (
                  <li key={hotels.id}>
                    <img
                      className="rounded-lg"
                      alt={hotels.name}
                      src={hotels.img}
                      style={{ width: "500px", height: "300px" }}
                    ></img>
                    <h2 className="text-lg text-black font-bold ">
                      Name: {hotels.name}
                    </h2>
                    <p className="text-lg text-black font-bold">
                      Price: Rs {hotels.price}
                    </p>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default ThingsToDo;