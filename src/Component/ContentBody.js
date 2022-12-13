import React from "react";
import Typed from "react-typed";
function ContentBody() {
  return (
    <div className="text-white text-3xl w-full h-screen max-w-[800px] flex flex-col mx-auto text-center justify-center mt-[-96px]">
      <p className="text-[#00df9a] font-bold p-2">GROW WITH DATA ANALYTICS</p>
      <h1 className="md:text-7xl sm:text-6xl text-4xl md:py-6">
        GROW WITH DATA
      </h1>
      <div className="flex justify-center items-center">
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
          Fast, Flexible, Financing for
        </p>
        <Typed
          strings={["B2B", "B2C", "SaaS"]}
          typeSpeed={120}
          backSpeed={140}
          loop
          className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
        />
      </div>
      <p className="md:text-2xl text-xl text-gray-500 font-bold p-1">
        Monitor your data analytics to increase revenue for B2B, B2C and Saas
        platforms.
      </p>
      <button className="bg-[#00df9a] w-[200px] rounded-md my-6 font-medium mx-auto py-2 text-black">
        Get Started
      </button>
    </div>
  );
}

export default ContentBody;
