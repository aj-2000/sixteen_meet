import React from "react";
import MeetControlBar from "../components/MeetControlBar";

const MeetingScreenPage = () => {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw]">
      <div className="mt-auto">
        <MeetControlBar />
      </div>
    </div>
  );
};

export default MeetingScreenPage;
