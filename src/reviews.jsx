import React, { useEffect, useState } from "react";
import star from "./assets/star.png"


function Reviews() {
//   const [star, setStars] = useState([]);
//   useEffect(() => {
//         if (star){
//           const data = await response.json();
//           console.log(data);
//           setStars(data);
//         } else {
          
//         }
//   });

  return (
    <>
      <div className="all">
        <h1>Write a Review</h1>
        <form>
          <label for="review">Your Review</label>
          <textarea
            name="review"
            id="review"
            cols="30"
            rows="8"
            placeholder="Write a review..."
          ></textarea>
          <label for="rating">Your Rating</label>
          <div className="stars">
            <button id="1"><img src={star} className="w-5 h-5" /></button>
            <button id="2"><img src={star} className="w-5 h-5" /></button>
            <button id="3"><img src={star} className="w-5 h-5" /></button>
            <button id="4"><img src={star} className="w-5 h-5" /></button>
            <button id="5"><img src={star} className="w-5 h-5" /></button>

          </div>
          <br />
        </form>
      </div>
    </>
  );
}

export default Reviews;
