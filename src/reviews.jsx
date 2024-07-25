import star from "./assets/star.png";

function Reviews() {

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
            <button >
              <img src={star} className="w-5 h-5" />
            </button>
            <button >
              <img src={star} className="w-5 h-5" />
            </button>
            <button >
              <img src={star} className="w-5 h-5" />
            </button>
            <button >
              <img src={star} className="w-5 h-5" />
            </button>
            <button >
              <img src={star} className="w-5 h-5" />
            </button>
          </div>
          <br />
        </form>
      </div>
    </>
  );
}

export default Reviews;
