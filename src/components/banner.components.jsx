import React from "react";
import background from "../assets/background.svg";
import RecommendedShow from "./recommended.components";

const Banner = () => {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div className="relative">
        <div
          className="flex flex-col items-center  h-screen bg-cover bg-center text-center px-4 justify-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50  flex flex-col items-center pt-32">
            <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
              Discover Exciting Events Happening
              <br />
              Near You - Stay Tuned for Updates!
            </h1>
            <p className="text-white max-w-3xl mt-7">
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:pl-28 pl-12 md:pl-23 absolute -bottom-32 left-0 right-0">
        <RecommendedShow />
      </div>
    </div>
  );
};

export default Banner;
