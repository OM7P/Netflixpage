import React from "react";
import Image from "next/image";
import styles from "./sign.module.css";
import FootarPage from "../footar";

function TestingMedia() {
  return (
    <div>
      <div className={styles.MainBgimg}>
        <div className="">
          <Image
            className="relative -top-7 left-9  px-6 max-[100px]:w-5/6 "
            src="/5977590.png"
            width={150}
            height={10}
          />
          <div className="flex justify-center items-center relative -top-8  ">
            <div
              style={{
                backgroundColor: "rgba(1, 2, 4, .7)",
                border: "1px solid",
                borderRadius: "10px",
              }}
              className="flex flex-col grid justify-items-center gap-4 w-5/12 max-[750px]:w-80 max-[750px]:grid justify-items-center "
            >
              <h1 className="text-white mr-auto text-3xl text-bold p-2 font-bold">
                Sign In
              </h1>
              <input
                className="w-3/5 h-14  text-center text-white   max-[750px]:w-5/6 rounded-md bg-transparent border-2 outline-0"
                placeholder="Enter email"
              />
              <input
                className="w-3/5 h-14  text-center text-white   max-[750px]:w-5/6 rounded-md bg-transparent border-2 outline-0"
                placeholder="Password"
                type="password"
              />
              <button className="w-2/5 flex justify-center items-center font-semibold bg-red-700  h-10 rounded-md text-neutral-50 max-[750px]:w-4/5 ">
                Sign In
              </button>
              <p className="flex justify-center items-center text-white text-xl max-[750px]:flex justify-center items-center">
                OR
              </p>
              <button className=" text-white text-xl bg-zinc-800 p-2 max-[750px]:w-4/5  rounded-md">
                Use a sign-in code
              </button>
              <button className="text-white text-base ">Forgot password?</button>

              <div className="flex justify-start flex-col ml-10 gap-2 ">
                <div className="flex flex-row gap-2">
                  <input type="checkbox" className="size-5" />
                  <p className="text-white text-96">Remembar me</p>{" "}
                </div>
                <p className="text-gray-500 ">
                  New to Netflix?
                  <span className="text-white">Sign up now.</span>
                </p>
                <p className="text-white">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot. <span className="text-blue-900">Learn more.</span>
                </p>
              </div>

              <div className="ml-10">
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FootarPage/>
    </div>
  );
}

export default TestingMedia;
