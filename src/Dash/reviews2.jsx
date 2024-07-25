// import React, { useEffect, useState } from "react";

// const Home2 = () => {
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/reviews");
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
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div>
//       <h1>Home</h1>
//       <ul>
//         {hotels.map((hotels) => (
//           <div key={hotels.id}>
//             <h1>{hotels.user}</h1>
//             <img
//               src={hotels.userImage}
//               style={{ width: "60px", height: "40px" }}
//             ></img>
//             <h1>{hotels.rating}</h1>
//             <h1>{hotels.date}</h1>
//             <h1>{hotels.comment}</h1>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home2;

// import React, { useEffect, useState } from "react";

// const Home2 = () => {
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/hotels");
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
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div className="">
//       <h1>Home</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Rating</th>
//           </tr>
//         </thead>
//       </table>
//       <ul>
//         {hotels.map((hotels) => (
//           <div key={hotels.id}>
//             <img
//               src={hotels.img}
//               alt={hotels.name}
//               style={{ width: "150px", height: "80px" }}
//             ></img>
//             <h1>{hotels.name}</h1>
//             <h1>$ {hotels.price}</h1>
//             <h1>{hotels.rating}</h1>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home2;

import React, { useEffect, useState } from "react";

const Review2 = () => {
  // const [hotels, setHotels] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchHotels = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/hotels");
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       console.log(data);
  //       setHotels(data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchHotels();
  // }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }

  const [hotels, setHotels] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentHotelIndex, setCurrentHotelIndex] = useState(null);
  const [newHotel, setNewHotel] = useState({
    id: " ",
    hotelId: "",
    rating: " ",
    comment: " ",
    user: " ",
    date: " ",
    userImage: " ",
  });

  const loadHotelsFromLocalStorage = () => {
    const storedHotels = localStorage.getItem("Review");
    if (storedHotels) {
      setHotels(JSON.parse(storedHotels));
    }
  };

  const saveHotelsToLocalStorage = (hotels) => {
    localStorage.setItem("Review", JSON.stringify(hotels));
  };

  useEffect(() => {
    loadHotelsFromLocalStorage();
  }, []);

  const handleAddHotel = () => {
    setShowForm(true);
    setEditMode(false);

  };

  const handleCancle = () => {
    setShowForm(false);
  };

  const handleEditHotel = (index) => {
    setCurrentHotelIndex(index);
    setNewHotel(hotels[index]);
    setShowForm(true);
    setEditMode(true);
  };

  const handleDeleteHotel = (index) => {
    const updatedHotels = [...hotels];
    updatedHotels.splice(index, 1);
    setHotels(updatedHotels);
    saveHotelsToLocalStorage(updatedHotels);
  };

  const handleSaveHotel = () => {
    let updatedHotels;
    if (editMode) {
      updatedHotels = hotels.map((hotel, index) =>
        index === currentHotelIndex ? newHotel : hotel
      );
    } else {
      updatedHotels = [...hotels, newHotel];
    }
    setHotels(updatedHotels);
    saveHotelsToLocalStorage(updatedHotels);
    setShowForm(false);
    setEditMode(false);
    setNewHotel({
      name: " ",
      price: " ",
      img: " ",
      rating: " ",
      freeCancellation: false,
      reserveNow: false,
      description: " ",
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewHotel({ ...newHotel, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Review</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Id</th>
              <th className="py-2 px-4 border-b">hotelId</th>
              <th className="py-2 px-4 border-b">rating</th>
              <th className="py-2 px-4 border-b">comment</th>
              <th className="py-2 px-4 border-b">user</th>
              <th className="py-2 px-4 border-b">date</th>
              <th className="py-2 px-4 border-b">userImage</th>
              <th className="py-2 px-4 border-b">Edit</th>
              <th className="py-2 px-4 border-b">Remove</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{hotel.id}</td>
                <td className="py-2 px-4 border-b">{hotel.hotelId}</td>
                <td className="py-2 px-4 border-b">{hotel.rating}</td>
                <td className="py-2 px-4 border-b">
                  {hotel.comment}
                  <span className="font-bold"> more...</span>
                </td>
                <td className="py-2 px-4 border-b">{hotel.user}</td>
                <td className="py-2 px-8 border-b">{hotel.date}</td>
                <td className="py-2 px-4 border-b">
                  <img
                    src={hotel.userImage}
                    alt={hotel.name}
                    className="w-24 h-16 object-cover"
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded" 
                  onClick={() => handleEditHotel(index)}>
                    Edit
                  </button>
                </td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-red-500 text-white px-3 py-1 rounded" 
                  onClick={() => handleDeleteHotel(index)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pt-4 pb-4">
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleAddHotel}
          >
            Add
          </button>
        </div>
      </div>
      {showForm && (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-xl font-bold pb-4">{editMode ? "Update Review" : "Add Review"}</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="id"
            >
              Id
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="id"
              type="text"
              name="id"
              value={newHotel.id}
              onChange={handleChange}
              placeholder="id"
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Hotel Id"
            >
              Hotel Id
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="hotelId"
              type="text"
              name="hotelId"
              value={newHotel.hotelId}
              onChange={handleChange}
              placeholder="Hotel Id"
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="rating"
            >
              Rating
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="rating"
              type="text"
              name="rating"
              value={newHotel.rating}
              onChange={handleChange}
              placeholder="rating"
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="comment"
            >
              Comment
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="comment"
              type="text"
              name="comment"
              value={newHotel.comment}
              onChange={handleChange}
              placeholder="comment"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="user"
            >
              User
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="user"
              type="text"
              name="user"
              value={newHotel.user}
              onChange={handleChange}
              placeholder="user"
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              name="date"
              checked={newHotel.date}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="userImage"
            >
              UserImage
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image-url"
              type="url"
              name="userImage"
              value={newHotel.userImage}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            ></input>
          </div>
          <div className="flex">
            <div className="flex items-center justify-between pr-4">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSaveHotel}
              >
                {editMode ? "Update Review" : "Save Review"}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleCancle}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Review2;
