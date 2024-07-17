import React, { useEffect, useState } from "react";

const UsHotels = () => {
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
      <div className="bg">
        <div className=" pr-8 pl-8">
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              {hotels.slice(0, 4).map((hotels) => (
                <div
                  className=" relative"
                  key={hotels.id}
                >
                  <img
                    className="rounded-2xl"
                    src={hotels.img}
                    alt={hotels.name}
                    style={{ width: "680px", height: "400px" }}
                  ></img>
                  <div className="w-full flex justify-center items-center absolute bottom-0 right-0 left-0 backdrop-blur-lg h-[55px] rounded-b-2xl"></div>
                  <div className="absolute bottom-0 flex p-4 w-full justify-between z-10">
                    <h2 className="text-medium text-white  font-bold ">
                      Name: {hotels.name}
                    </h2>
                    <p className="text-medium text-white font-bold ">
                      {hotels.price} $
                    </p>
                  </div>
                  <img
                    className="w-7 h-7 cursor-pointer absolute top-2 left-2 drop-shadow-lg"
                    src="https://cdn-icons-png.flaticon.com/128/4436/4436444.png"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsHotels;
