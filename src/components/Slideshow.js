import { useEffect, useState, useRef } from "react";

import ReactStars from "react-rating-stars-component";
import React from "react";
import * as Constants from '../constants'
import '../css/Slideshow.css'

const delay = 2000;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === Constants.reviews.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {Constants.reviews.map((review , index) => (
          <div
            className="slide"
            key={index}
          >
            <div style ={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '-webkit-fill-available',}}
            >
                <ReactStars
                    count={5}
                    value={review.rating}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                />
                <p style={{ margin: '8px 0px', width:'100%', wordBreak:'break-word', whiteSpace:'normal' }}>{review.review}</p>
                <p style={{ fontWeight:'bold' }}>{review.name}</p>
            </div>
            {/* <Button to="/reviews">READ ALL REVIEWS</Button> */}
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {Constants.reviews.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;