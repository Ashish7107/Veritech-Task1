import React from "react";
interface Props {
  name: string;
  designation: string;
}
const ProfileCard = ({ name, designation }: Props) => {
  return (
    <div className="container flex flex-row justify-center items-center">
      <div className="">
        <img src="./profile.png" alt="" className="h-[88px]" />
        <div className="font-bold text-center pt-4">{name}</div>
        <div className="text-gray-400 text-center">{designation}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
