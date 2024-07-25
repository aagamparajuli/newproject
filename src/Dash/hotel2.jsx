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

const Hotel2 = () => {
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
    name: "",
    price: " ",
    img: " ",
    rating: " ",
    freeCancellation: false,
    reserveNow: false,
    description: " ",
  });

  const loadHotelsFromLocalStorage = () => {
    const storedHotels = localStorage.getItem("hotels");
    if (storedHotels) {
      setHotels(JSON.parse(storedHotels));
    }
  };

  const saveHotelsToLocalStorage = (hotels) => {
    localStorage.setItem("hotels", JSON.stringify(hotels));
  };

  useEffect(() => {
    loadHotelsFromLocalStorage();
  }, []);

  const handleAddHotel = () => {
    setShowForm(true);
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
      <h1 className="text-2xl font-bold mb-4">Hotel</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Rating</th>
              <th className="py-2 px-4 border-b">Free Cancellation</th>
              <th className="py-2 px-4 border-b">Reserve Now</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Edit</th>
              <th className="py-2 px-4 border-b">Remove</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{hotel.name}</td>
                <td className="py-2 px-4 border-b">${hotel.price}</td>
                <td className="py-2 px-4 border-b">
                  <img
                    src={hotel.img}
                    alt={hotel.name}
                    className="w-24 h-16 object-cover"
                  />
                </td>
                <td className="py-2 px-8 border-b">{hotel.rating}</td>
                <td className="py-2 px-16 border-b">
                  {hotel.freeCancellation ? "Yes" : "No"}
                </td>
                <td className="py-2 px-8 border-b">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    Reserve
                  </button>
                </td>
                <td className="py-2 px-4 border-b">
                  {hotel.description}
                  <span className="font-bold"> more...</span>
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={() =>handleEditHotel(index)}
                  >
                    Edit
                  </button>
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() =>handleDeleteHotel(index)}
                  >
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
          <h1 className="text-3xl font-bold pb-4">
            {editMode ? "Update Hotel" : "Add Hotel"}
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="name"
              value={newHotel.name}
              onChange={handleChange}
              placeholder="Name"
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="text"
              name="price"
              value={newHotel.price}
              onChange={handleChange}
              placeholder="Price"
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Image URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image-url"
              type="url"
              name="img"
              value={newHotel.img}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Rating"
            >
              Rating
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Rating"
              type="text"
              name="rating"
              value={newHotel.rating}
              onChange={handleChange}
              placeholder="Rating"
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Rating"
            >
              Free Cancellation
            </label>
            <input
              id="FC"
              type="checkbox"
              name="freeCancellation"
              checked={newHotel.freeCancellation}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Rating"
            >
              Reserve Now
            </label>
            <input
              id="RN"
              type="checkbox"
              name="reserveNow"
              checked={newHotel.reserveNow}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Description"
              type="text"
              name="description"
              value={newHotel.description}
              onChange={handleChange}
              placeholder="Description"
            ></textarea>
          </div>
          <div className="flex">
            <div className="flex items-center justify-between pr-4">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSaveHotel}
              >
                {editMode ? "Update Hotel" : "Save Hotel"}
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

export default Hotel2;
