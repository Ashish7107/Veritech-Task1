import React from "react";
import ProfileCard from "../ProfileCard";
import Ribbon from "../Ribbon/Ribbon";

const Leadership = () => {
  return (
    <div className="container flex flex-col justify-center items-center">
      <Ribbon subHeading="LeaderShip and Management Team" />
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-20 pt-10">
        <ProfileCard name={"Babu"} designation={"sss"}></ProfileCard>
        <ProfileCard name={"Babu"} designation={"sss"}></ProfileCard>
      </div>
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-20 pt-10 ">
        <ProfileCard name={"Babu"} designation={"sss"}></ProfileCard>
        <ProfileCard name={"Babu"} designation={"sss"}></ProfileCard>
        <ProfileCard name={"Babu"} designation={"sss"}></ProfileCard>
      </div>
    </div>
  );
};

export default Leadership;
