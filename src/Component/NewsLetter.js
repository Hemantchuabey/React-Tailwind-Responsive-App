import React from "react";

function NewsLetter() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-6">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Wants Tips and Trick to Optimize Your Flow ?
          </h1>
          <p className="">Sign up to our news letter and stay updated.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex w-full rounded-md p-2 text-black"
            />
            <button className="text-[black] w-[200px] rounded-md my-6 font-medium py-2 bg-[#00df9a] mx-auto md:mx-0 lg:ml-2 md:ml-2 ml-2">
              Notify me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read Our{" "}
            <span className="text-[#00df9a]">private policies.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
