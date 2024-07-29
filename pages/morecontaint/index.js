import React from "react";
import Image from "next/image";

function MorePage() {
  return (
    <div className="  bg-black">
      <div className="flex justify-center items-center min-h-screen gap-10 sm:flex flex-col text-center lg:flex lg:flex-row ">
        <div className="">
          <Image src="/mobile-0819.jpg" width={300} height={100} />
        </div>
        <div className="">
          <h1 className="text-white font-bold text-4xl size-4/6 w-6/6  w-full  ">
            Download your shows to watch offline
          </h1>
          <h3
            className="text-white font-bold text-1xl "
            style={{ marginTop: "20px" }}
          >
            Save your favourites easily and always have something to watch.
          </h3>
        </div>
      </div>
      <div
        className="text-white bg-stone-600"
        style={{ width: "100%", height: "5px" }}
      ></div>
    </div>
  );
}

export default MorePage;
