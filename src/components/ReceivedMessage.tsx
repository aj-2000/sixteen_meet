import React from "react";

const ReceivedMessage = () => {
  return (
    <div>
      <div className="flex items-center pr-10 pt-2">
        <img
          src="https://i.imgur.com/IAgGUYF.jpg"
          className="rounded-full shadow-xl"
          width="15"
          height="15"
        />
        <span className="flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end">
          I really had a scary feeling about this, can please advice some tricks
          to overcome my anxiety?
          <span className="text-gray-400 pl-1">01:25am</span>
        </span>
      </div>
    </div>
  );
};

export default ReceivedMessage;
