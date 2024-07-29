import React from "react";

function FootarPage() {
  return (
    <div className="bg-black">
      <div className="p-8 text-white font-bold text-1xl ">
        <h1 className="" style={{ height: "50px" }}>
          Questions? Call<u> 000-800-919-1694</u>
        </h1>
        <div>
          <u className="grid grid-cols-3 gap-3">
            <h5>FAQ</h5>
            <h5>Help</h5>
            <h5>Centre</h5>
            <h5>Account</h5> <h5>Media</h5>
            <h5>Centre</h5>
            <h5>Investor</h5> <h5>Relations</h5>
            <h5>Jobs</h5>
            <h5>Ways to Watch</h5>
            <h5>Terms of Use</h5>
            <h5>Privacy</h5>
            <h5>Cookie Preferences</h5>
            <h5>Corporate Information</h5>
            <h5> Contact Us</h5>
            <h5>Speed Test</h5>
            <h5>Legal Notices</h5>
            <h5> Only on Netflix</h5>
            <h5>Netflix</h5>
            <h5>Notes</h5>
            <select
              className=" font-semibold rounded-md bg-gray-200 text-center w-28 h-10 text-black "
              style={{
                border: "1px solid",
                backgroundColor: "rgba(1, 2, 4, .3)",
                color: "white",
              }}
            >
              <option>English</option>
              <option>Hindi</option>
            </select>
            <h5>Netflix India</h5>
          </u>{" "}
        </div>
      </div>
    </div>
  );
}

export default FootarPage;
