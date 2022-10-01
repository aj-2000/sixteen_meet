import React from "react";

const JoinMeet = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-24 gap-y-4 ">
      <span className="text-lg font-medium my-10">Join Meeting</span>
      <div className="flex flex-col">
        <label className="text-xs text-gray-400 pb-2" htmlFor="meeting_id">Meeting ID or Personal Link Name</label>
        <input
        className="rounded-sm w-full border-1 border py-2 px-auto min-w-[320px]"
          id="meeting_id"
          type="text"
          placeholder="  Enter Meeting ID or Personal Link Name"
        />
      </div>
      <span className="text-sm text-center text-gray-400 font-medium py-2 bg-gray-200 rounded-lg px-auto min-w-[320px]">
        Join
      </span>
    </div>
  );
};

export default JoinMeet;
