import React from "react";
import MeetControlBar from "../components/MeetControlBar";
import Participant from "../components/Participant";

const MeetingScreenPage = () => {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] bg-black">
      <div className="h-[calc(100vh-60px)] flex flex-wrap justify-center items-center gap-8 overflow-auto p-8">
       <Participant/>
       <Participant/>
       <Participant/>
       <Participant/>
       <Participant/>
       <Participant/>
       <Participant/>
       <Participant/>
       <Participant/>
       <Participant/>
       <Participant/>
       <Participant/>
       <Participant/>
       <Participant/>
       <Participant/>
       <Participant/>
      </div>
      <div className="mt-auto">
        <MeetControlBar />
      </div>
    </div>
  );
};

export default MeetingScreenPage;
