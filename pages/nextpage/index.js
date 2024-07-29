import React from "react";
import Image from "next/image";

function NextNewpage() {
  return (
    <div className="bg-black"> 
      <div className="flex justify-center items-center min-h-screen gap-20 sm:flex flex-wrap text-center"  >
        <div >
          <Image
            src="/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png"
            width={400}
            height={300}
          />
        </div>
        <div style={{width:"800px"}}>
          <h1 className="text-white font-bold text-5xl size-5/6 w-12/12  w-full">Create profiles for kids</h1>
          <h3 className="text-white  text-2xl " style={{marginTop: "20px"}} >
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </h3>
        </div>
      </div>
      <div className="text-white bg-stone-600" style={{width:"100%",height:"5px"}}></div>

    </div>
  );
}

export default NextNewpage;
