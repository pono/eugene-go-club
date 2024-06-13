import Image from "next/image";
import React from "react";

const MeetUpInfo = () => {
  return (
    // bg-[#DDEAFC] blue
    // bg-gradient-to-b from-blue-500 to-sky-300
    // bg-[url('/assets/images/cover.jpg')]  image background
    <div className="flex flex-col justify-start items-center bg-[url(/assets/images/background-flipped.png)] bg-no-repeat text-white  h-[69vh] min-h-[500px]">
      {/* <div className=" border-black text-[55px] font-black ">Meetup Info</div> */}

      <div className="  mt-28  text-start h-fit flex items-center justify-center rounded-md ">
        <div className="py-12  h-fit flex-col flex items-center justify-center rounded-md  text-center  ">
          <div className="font-playfair text-[55px] mb-4"> Wednesdays</div>
          <div className="font-montserrat text-2xl mb-4">
            {" "}
            5:30 pm - 9:00 pm
          </div>
          <div className="font-montserrat text-2xl ">
            {" "}
            5th Street Alley near Magpie Coffee
          </div>
        </div>
        <div className="   ">
          <Image
            src="/assets/images/black.png"
            alt="map"
            width={50}
            height={50}
            className=" "
          />
        </div>
      </div>
    </div>
  );
};

export default MeetUpInfo;
