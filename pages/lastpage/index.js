import React from "react";
import Image from "next/image";

function Lastpage() {
  return (
    <div className="  bg-black ">
      <div className="flex justify-center min-h-screen items-center gap-10 sm:flex flex-col-reverse text-center lg:flex lg:flex-row">
        <div>
          <h1 className="text-white font-bold text-5xl w-full">Watch everywhere</h1>
          <h3 className="text-white font-bold text-1xl " style={{marginTop: "20px"}} >
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h3>
        </div>
        <div>
            <Image src="/device-pile-in.png" width={300} height={100}/>
        </div>
      </div>
      <div className="text-white bg-stone-600" style={{width:"100%",height:"5px"}}></div>

    </div>
  );
}

export default Lastpage;
