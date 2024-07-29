import React from "react";

function Containttext() {
  return (
    <div
      className="text-center"
      style={{ position: "relative", bottom: "60px" }}
    >
      <div className="flex justify-center min-h-screen items-center flex-col">
        <div className="">
          <h1
            className="text-5xl font-sans text-white font-revert"
            style={{ fontWeight: 700, fontSize: "40px" }}
          >
            Unlimited movies, TV shows and more
          </h1>
          <h3
            className="text-1xl font-sans text-white p-2"
            style={{ fontWeight: 400, fontSize: "22px", marginTop: "20px" }}
          >
            Watch anywhere. Cancel anytime.
          </h3>
          <h3
            className="text-xl font-sans text-white"
            style={{ fontWeight: 400, fontSize: "25px", marginTop: "15px" }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
        </div>
        <div
          className="flex gap-10 p-2 xxs:flex flex-wrap justify-center"
          style={{ marginTop: "20px" }}
        >
          <input
            required
            type="email"
            placeholder="Enter email "
            className="flex w-full rounded-md text-center text-white xxs:flex-1 h-10" // Add the h-10 class
            style={{
              backgroundColor: "rgba(1, 2, 4, .3)",
              border: "1px solid",
              width:"350px"
            }}
          />
          <button
            className="font-sans font-semibold bg-red-700 w-3/5 h-10 rounded-md text-neutral-50 xxs:flex-1 "
            style={{ fontWeight: "600", fontSize: "20px",width:"200px" }}
            onClick={() => alert("You are not a valid user!!")}
          >
            Get Started{` >`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Containttext;
