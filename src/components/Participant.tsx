import React from "react";
import { BsMicMute } from "react-icons/bs";
import { BiVideoOff } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import Webcam from "react-webcam";
const Participant = () => {
  return (
    <div className="w-[400px] bg-transparent relative">
      <p className="absolute left-2 bottom-2 text-white font-medium text-xl">
        You
      </p>
      <div className="group absolute w-full h-full flex justify-center items-center hover:bg-black hover:bg-opacity-40 z-10">
        <div className="invisible group-hover:visible bg-gray-700 bg-opacity-60 p-4 rounded-full">
          <span className="flex text-white text-3xl gap-4 justify-center items-center">
            <BsMicMute className="group-hover:cursor-pointer"/>
            <BiVideoOff />
            <AiOutlineMessage />
          </span>
        </div>
      </div>
      {/* <Webcam className="rounded-lg border-2"/> */}
      <img className="rounded-lg border-2" src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" />
    </div>
  );
};

export default Participant;
