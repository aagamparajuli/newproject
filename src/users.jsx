// import React, { useEffect, useState } from "react";
// import HomeNav from "./HomeNav";

// function Profile() {
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/users");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//         setHotels(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchHotels();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <>
//       <HomeNav />
//       <h1>Profile</h1>
//       {hotels.map((hotel) => (
//         <div key={hotel.id}>
//           <img
//             src={hotel.image}
//             alt={hotel.name}
//             style={{ width: "500px", height: "300px" }}
//           />
//           <h1>{hotel.name}</h1>
//         </div>
//       ))}
//     </>
//   );
// }

// export default Profile;
