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
                src="https://media-exp1.licdn.com/dms/image/C4D03AQHj-Uul_quJmA/profile-displayphoto-shrink_400_400/0/1663409602983?e=1671667200&v=beta&t=WkNYWx_QKXikRslJfBZOxUXZlQG6BwbhCVAo6EfXv_U"
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
                src="https://media-exp1.licdn.com/dms/image/C4D03AQE9ojAB0ygWlg/profile-displayphoto-shrink_100_100/0/1662952990286?e=1671667200&v=beta&t=wRADpY88yv1AP15uiNpr_wLao1mbT_vLOKjdF1lMdCE"
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
                src="https://media-exp1.licdn.com/dms/image/C5603AQFvmNKUe_r-2w/profile-displayphoto-shrink_100_100/0/1626711580245?e=1671667200&v=beta&t=oVYljBKIlHoEA6Kskz3IYm7AfkR9HDSbFOKme0ulJOM"
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
                src="https://media-exp1.licdn.com/dms/image/D4E03AQHrWVZ1R34x-g/profile-displayphoto-shrink_100_100/0/1664553441307?e=1671667200&v=beta&t=CcdDgrfVuFHHVXdMCVYxRI35E8Yg1pQGNsKa1E3Ly-o"
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
