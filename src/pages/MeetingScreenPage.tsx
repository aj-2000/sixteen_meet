import React, { useState } from "react";
import ComposeMessageBox from "../components/ComposeMessageBox";
import MeetControlBar from "../components/MeetControlBar";
import MessagesBox from "../components/MessagesBox";
import Participant from "../components/Participant";
import { useAppSelector } from "../app/hooks";
import ParticipantDetails from "../components/ParticipantDetails";
const MeetingScreenPage = () => {
  const isChatBoxOpen = useAppSelector((state) => state.chatBox.isChatBoxOpen);
  const isParticipantDetailsBoxOpen = useAppSelector(
    (state) => state.participantsDetails.isParticipantDetailsBoxOpen
  );

  return (
    <div className="flex flex-col h-[100vh] w-[100vw] bg-black">
      <div className="flex">
        <div
          className={`h-[calc(100vh-60px)] flex flex-wrap justify-center items-center gap-8 overflow-auto p-8 ${
            (isChatBoxOpen || isParticipantDetailsBoxOpen) && "hidden"
          } md:inline-flex`}
        >
          <Participant />
          <Participant />
          <Participant />
          <Participant />
          <Participant />
          <Participant />
          <Participant />
          <Participant />
        </div>
        <div
          className={`flex flex-col bg-black w-[70rem] h-[calc(100vh-60px)] px-8 md:px-4 pt-4 ${
            !isChatBoxOpen && "hidden"
          }`}
        >
          <MessagesBox />
          <ComposeMessageBox />
        </div>
        <div
          className={`flex flex-col bg-black w-[70rem] h-[calc(100vh-60px)] px-8 md:px-4 pt-4 ${
            !isParticipantDetailsBoxOpen && "hidden"
          }`}
        >
          <ParticipantDetails />
        </div>
      </div>

      <div className="mt-auto">
        <MeetControlBar />
      </div>
    </div>
  );
};

export default MeetingScreenPage;
