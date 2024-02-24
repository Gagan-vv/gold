import React from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const Offer = () => {
  const repeat=[1,2,3];
  return (
    <div className="offer">
      <div className="slide-container">
        <Slide>
          {repeat.map((index) => (
            <div key={index}>
              <img src={`/asset/banner-${index}.png`} alt={`banner-${index}`} />
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Offer;
