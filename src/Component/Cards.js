import React from "react";
import Single from "../Assets/single.png";
import Double from "../Assets/double.png";
import Triple from "../Assets/triple.png";

function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Single}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Save up to 2GB</p>
            <button className="text-[black] w-[200px] rounded-md my-6 font-medium py-2 bg-[#00df9a] mx-auto md:mx-0 lg:ml-2 md:ml-2 ml-2">
              Start Trial
            </button>
          </div>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 ">
          <img
            src={Double}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">$249</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">1TB Storage</p>
            <p className="py-2 border-b mx-8">
              2 Granted User{" "}
              <span className="text-sm text-gray-500">(recommended)</span>
            </p>
            <p className="py-2 border-b mx-8">Save up to 4GB</p>
            <button className="text-[#00df9a] w-[200px] rounded-md my-6 font-medium py-2 bg-[black] mx-auto md:mx-0 lg:ml-2 md:ml-2 ml-2">
              Start Trial
            </button>
          </div>
        </div>
        <div className="w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img src={Triple} alt="" className="w-20 mx-auto mt-[-3rem]" />
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-center text-4xl font-bold">$449</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">2TB Storage</p>
            <p className="py-2 border-b mx-8">3 Granted User</p>
            <p className="py-2 border-b mx-8">Save up to 8GB</p>
            <button className="text-[black] w-[200px] rounded-md my-6 font-medium py-2 bg-[#00df9a] mx-auto md:mx-0 lg:ml-2 md:ml-2 ml-2">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
