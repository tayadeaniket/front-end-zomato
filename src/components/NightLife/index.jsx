import React from "react";

// component
import NightLifeCarousel from "./NightLifeCarousel";

function NightLife() {
  return (
    <div className="mb-10">
      <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold lg:text-2xl lg:mb-6 lg:mt-6 lg:font-medium">
        Nightlife Restaurant in Akola
      </h1>
      <NightLifeCarousel />
    </div>
  );
}

export default NightLife;
