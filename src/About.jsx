import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const About = () => {
  const { id } = useParams();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch(`http://localhost:3000/hotels/${id}`);
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

  const StarRating = ({ rating }) => {
    const starImageUrl =
      "https://cdn-user-icons.flaticon.com/156018/156018870/1721237097828.svg?token=exp=1721237997~hmac=0ce1c252ace1b8d64a80d1e7910ac509"; // Replace this with your star image URL
    const stars = Array.from({ length: rating }, (_, index) => (
      <img
        key={index}
        src={starImageUrl}
        alt="star"
        className="w-6 h-6 inline-block"
      />
    ));
    return <div>{stars}</div>;
  };

  return (
    <>
      <div className="pr-14 pl-14 pt-7">
        <div className="bg-white mb-8 shadow-2xl flex rounded-xl ">
          <div className="flex-col content-center">
            <div className="bg">
              <div className="pl-6 pt-3 pb-4">
                <StarRating rating={hotels.rating} />
              </div>
              <div className="flex">
                <div className="p-4">
                  <p>{hotels.desc}</p>
                </div>
                <div className="pl-20 flex pr-20 pt-10">
                  <Link className="bg-blue-500 p-2 pl-5 w-28 h-10 rounded-md text-white"
                    to={`${hotels.id}`}
                    >
                    Book Now
                  </Link>
                  {/* <button className=" bg-blue-500 rounded-lg text-white font-bold p-3 pr-14 pl-14">View Deal</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
