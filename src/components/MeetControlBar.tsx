import React from "react";
import { BiMicrophone, BiMicrophoneOff, BiInfoCircle } from "react-icons/bi";
import { BsCameraVideo, BsThreeDotsVertical } from "react-icons/bs";
import {
  MdClosedCaptionOff,
  MdPresentToAll,
  MdCallEnd,
  MdOutlinePeopleAlt,
} from "react-icons/md";
import { FaRegHandPaper } from "react-icons/fa";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleChatBox } from "../app/features/chatBox/chatBoxSlice";
import { toggleParticipantDetailsBox } from "../app/features/participantsDetails/participantsDetailsSlice";

const MeetControlBar = () => {
  const isChatBoxOpen = useAppSelector((state) => state.chatBox.isChatBoxOpen);
  const isParticipantDetailsBoxOpen = useAppSelector(
    (state) => state.participantsDetails.isParticipantDetailsBoxOpen
  );
  const dispatch = useAppDispatch();
  return (
    <div className="bg-black flex flex-col md:flex-row text-white text-base justify-between items-center px-4 py-1">
      <div className="hidden md:inline-block">2:57 PM | sbz-pwdg-fgb</div>
      <div className="flex">
        <div className="text-lg rounded-full bg-red-500 p-2 my-2 mx-1">
          <BiMicrophoneOff />
        </div>
        <div className="text-lg rounded-full bg-gray-700  p-2 my-2 mx-1">
          <BsCameraVideo />
        </div>
        <div className="text-lg rounded-full bg-gray-700  p-2 my-2 mx-1">
          <MdClosedCaptionOff />
        </div>
        <div className="text-lg rounded-full bg-gray-700  p-2 my-2 mx-1">
          <FaRegHandPaper />
        </div>
        <div className="text-lg rounded-full bg-gray-700  p-2 my-2 mx-1">
          <MdPresentToAll />
        </div>
        <div className="text-lg rounded-full bg-gray-700  p-2 my-2 mx-1">
          <BsThreeDotsVertical />
        </div>
        <div className="text-lg rounded-full  bg-red-500 px-4 py-2 my-2 mx-1">
          <MdCallEnd />
        </div>
      </div>
      <div className="flex">
        <div className="text-xl rounded-full px-4 py-2 my-2 mx-1">
          <BiInfoCircle />
        </div>
        <div
          onClick={() => {
            if (isChatBoxOpen) {
              dispatch(toggleChatBox());
            }
            dispatch(toggleParticipantDetailsBox());
          }}
          className="text-xl rounded-full px-4 py-2 my-2 mx-1"
        >
          <MdOutlinePeopleAlt />
        </div>
        <div
          onClick={() => {
            if (isParticipantDetailsBoxOpen) {
              dispatch(toggleParticipantDetailsBox());
            }
            dispatch(toggleChatBox());
          }}
          className="text-xl rounded-full px-4 py-2 my-2 mx-1 hover:cursor-pointer"
        >
          <BsFillChatLeftTextFill />
        </div>
      </div>
    </div>
  );
};

export default MeetControlBar;
