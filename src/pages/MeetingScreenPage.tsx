import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import ComposeMessageBox from "../components/ComposeMessageBox";
import MeetControlBar from "../components/MeetControlBar";
import MessagesBox from "../components/MessagesBox";
import Participant from "../components/Participant";

const MeetingScreenPage = () => {
  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState<Boolean>(false);
  const handleMessageBox = () => {
    setIsMessageBoxOpen((prev) => !prev);
    console.log(isMessageBoxOpen);
  };
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] bg-black">
      <div className="text-white text-4xl" onClick={handleMessageBox}>
        <AiFillMessage />
      </div>
      <div className="flex">
        <div className={`h-[calc(100vh-60px)] flex flex-wrap justify-center items-center gap-8 overflow-auto p-8 ${isMessageBoxOpen && 'hidden'} md:inline-flex`}>
          <Participant />
          <Participant />
          <Participant />
          <Participant />
          <Participant />
          <Participant />
          <Participant />
          <Participant />
        </div>
        <div className={`flex flex-col bg-black w-[70rem] h-[calc(100vh-60px)] px-8 md:px-4 pt-4 ${!isMessageBoxOpen && 'hidden'}`}>
          <MessagesBox />
          <ComposeMessageBox />
        </div>
      </div>

      <div className="mt-auto">
        <MeetControlBar />
      </div>
    </div>
  );
};

export default MeetingScreenPage;
