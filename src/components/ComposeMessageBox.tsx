import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BsMic } from "react-icons/bs";
const ComposeMessageBox = () => {
  return (
    <div className="flex justify-around items-center bg-gray-500 p-2 rounded-b-md">
      <div>
      <input type="text" className="rounded-full pl-6 pr-12 py-2 focus:outline-none h-auto placeholder-gray-100 bg-gray-900 text-white " placeholder="Type a message..." id="typemsg"/>
      </div>
      <div>
        <AiOutlineSend className="text-3xl" />
      </div>
    </div>
  );
};

export default ComposeMessageBox;
