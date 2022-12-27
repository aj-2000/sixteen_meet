import React from "react";
import { MdCancel } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
import { BsMicMute, BsPin, BsThreeDotsVertical } from "react-icons/bs";
import { useAppDispatch } from "../app/hooks";
import { toggleParticipantDetailsBox } from "../app/features/participantsDetails/participantsDetailsSlice";
const ParticipantDetails = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center m-2 text-white">
        <span className="text-3xl">Participants</span>
        <span
          onClick={() => {
            dispatch(toggleParticipantDetailsBox());
          }}
          className="text-3xl"
        >
          <MdCancel />
        </span>
      </div>
      <div className="flex items-center gap-2 m-2 text-white">
        <span className="text-2xl">
          <HiUserAdd />
        </span>
        <span className="text-base">Add participants</span>
      </div>

      <div className="flex items-center gap-2 m-2 text-white">
        <input
          type="text"
          className="px-2 py-3 rounded-md border-1 border-gray-200 text-black w-full"
          placeholder="Search for participants"
        />
      </div>

      <div className="flex flex-col gap-6 m-2 text-white">
        <span className="text-sm text-white">In call</span>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8">
              <img
                className="rounded-full"
                src="https://media.licdn.com/dms/image/D4D03AQHh5u0zW76BqQ/profile-displayphoto-shrink_800_800/0/1668944589962?e=1677715200&v=beta&t=RB-ZLzKyU_hqd0lYsawIv8vrbtsS24ofrBlsRc7RLjA"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-sm">{"Ajay Sharma (You)"}</span>
              <span className="text-xs">Meeting host</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xl">
            <div>
              <BsMicMute />
            </div>
            <div>
              <BsPin />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center ">
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8">
              <img
                className="rounded-full"
                src="https://pps.whatsapp.net/v/t61.24694-24/317055950_566320794875922_7380152775861602615_n.jpg?ccb=11-4&oh=01_AdR6aZbVSN8-H8hdYrVGLcwivTXC5GY2UtngeRUhMWj6DQ&oe=63B82326"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-sm">Kartik Bagri</span>
              {/* <span className="text-xs">Meeting host</span> */}
            </div>
          </div>
          <div className="flex items-center gap-6 text-xl">
            <div>
              <BsMicMute />
            </div>
            <div>
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8">
              <img
                className="rounded-full"
                src="https://pps.whatsapp.net/v/t61.24694-24/312204642_687890339649530_8499401415103888520_n.jpg?ccb=11-4&oh=01_AdSqUqM_VB8Xbk-SVKumlMdrd8iZfaF722MTCn7dZIzo8Q&oe=63B81475"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-sm">Diksha Bansal</span>
              {/* <span className="text-xs">Meeting host</span> */}
            </div>
          </div>
          <div className="flex items-center gap-6 text-xl">
            <div>
              <BsMicMute />
            </div>
            <div>
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8">
              <img
                className="rounded-full"
                src="https://pps.whatsapp.net/v/t61.24694-24/312280021_479202791007341_689401792306067652_n.jpg?ccb=11-4&oh=01_AdRtm5h7IuMdJOYBFN92yH08qQWOD9-THj0p1XSkUZm0wA&oe=63B7F77D"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-sm">Divyanshi Verma</span>
              {/* <span className="text-xs">Meeting host</span> */}
            </div>
          </div>
          <div className="flex items-center gap-6 text-xl">
            <div>
              <BsMicMute />
            </div>
            <div>
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantDetails;
