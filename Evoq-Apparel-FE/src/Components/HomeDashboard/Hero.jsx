import React from "react";
import heroImage from "../../assets/landing-image.png";

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-62px)] w-screen ">
      {/* Hero Image */}

      <img
        src={heroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Background Shade */}
      <div className="absolute inset-0 bg-background/10"></div>

    {/* Content */}
    <div className="absolute inset-0 flex items-center justify-center">
    <div>
      hdhd
    </div>
    </div>
     
    </div>
  );
};

export default Hero;
