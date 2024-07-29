import React from "react";
import Image from "next/image";

function ContaintOne() {
  return (
    <div className=" bg-black ">
      <div
        className="text-white bg-stone-600 min-w-max  "
        style={{ width: "100%", height: "5px" }}
      ></div>
      <div className="flex justify-center gap-10 items-center min-h-screen sm:flex flex-col-reverse text-center lg:flex lg:flex-row">
        <div className="flex-col items-center ">
          <h1 className="font-bold text-5xl text-white ">Enjoy on your TV</h1>
          <h3
            className="text-white sm:flex text-center  "
            style={{ marginTop: "15px" }}
          >
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h3>
        </div>
        <div className="">
          <Image src="/videoframe_11011.png" width={300} height={100} />
        </div>
      </div>
      <div
        className="text-white bg-stone-600 min-w-max"
        style={{ width: "100%", height: "5px" }}
      ></div>
    </div>
  );
}

export default ContaintOne;
