import React from "react";
import Image from "next/image";
import styles from "./netflix.module.css";
import Containttext from "../containttext";
import { useRouter } from "next/router";

function NetflixPage() {
  const router = useRouter();

  return (
    <div className={styles.imagestying}>
      <div className="flex justify-center items-center justify-around xxs:flex flex-col-">
        <Image src="/5977590.png" width={100} height={10} />
        <div className="flex gap-2  ">
          <select
            className=" font-semibold rounded-md bg-gray-200 text-center w-28 h-10 text-black  "
            style={{
              border: "1px solid",
              backgroundColor: "rgba(1, 2, 4, .3)",
              color: "white",
            }}
          >
            
            <option> English</option>
            <option>Hindi</option>
          </select>
          <button
            className="w-3/5 font-semibold bg-red-700 min-w-24 h-10 rounded-md text-neutral-50 "
            onClick={() => router.push("/signin")}
          >
            Sign In
          </button>
        </div>
      </div>
      <Containttext />
    </div>
  );
}

export default NetflixPage;
