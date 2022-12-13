import React from "react";
import Laptop from "../Assets/laptop.jpg";
function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center ">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally.
          </h1>
          <p className="">
            nisl pretium fusce id velit ut tortor pretium viverra suspendisse
            potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed
            nisi lacus sed viverra tellus in hac habitasse platea dictumst
          </p>
          <button className="text-[#00df9a] w-[200px] rounded-md my-6 font-medium py-2 bg-black mx-auto md:mx-0 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
