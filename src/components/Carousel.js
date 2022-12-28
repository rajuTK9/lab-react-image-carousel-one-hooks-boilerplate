import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
  const [i, setI] = useState(0);
  function back() {
    if (i > 0) setI((i) => i - 1);
  }
  function forward() {
    if (i < 2) setI((i) => i + 1);
  }

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${images[i].img})`,
      }}
    >
      <button onClick={back}>
        <ArrowBackIosIcon></ArrowBackIosIcon>
      </button>
      <div className="content">
        <h1>{images[i].title}</h1>
        <h3>{images[i].subtitle}</h3>
      </div>
      <button onClick={forward}>
        <ArrowForwardIosIcon></ArrowForwardIosIcon>
      </button>
    </div>
  );
}

export default Carousel;
