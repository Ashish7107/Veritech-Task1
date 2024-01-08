import React from "react";
import ProfileCard from "../ProfileCard";
import Ribbon from "../Ribbon/Ribbon";

const DevelopmentTeam = () => {
  return (
    <div>
      <div className="container flex flex-col justify-center items-center">
        <Ribbon subHeading="Development Team" />
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-48 pt-10">
          <ProfileCard name={"Babu"} designation={"sss"}></ProfileCard>
          <ProfileCard name={"Babu"} designation={"sss"}></ProfileCard>
          <ProfileCard name={"Babu"} designation={"sss"}></ProfileCard>
          <ProfileCard name={"Babu"} designation={"sss"}></ProfileCard>
        </div>
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-28 pt-10 ">
          <ProfileCard name={"Babu"} designation={"sss"}></ProfileCard>
          <ProfileCard name={"Babu"} designation={"sss"}></ProfileCard>
          <ProfileCard name={"Babu"} designation={"sss"}></ProfileCard>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentTeam;
