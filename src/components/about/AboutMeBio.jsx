import React from "react";
import { aboutMeData } from "../../data/bio";
import profileImg from "../../images/profile1.jpg";
import "../../css/Tailwind.css";
function AboutMeBio() {
  return (
    <div className="block mt-10 ml-2 sm:flex sm:mt-20 sm:gap-10">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0 mt-1">
        <img src={profileImg} className="rounded-lg w-96" />
      </div>
      <div className="font-general-regular w-full sm:w-3/4 text-left ">
        {aboutMeData.map((bio,) => (
          <p
            key={bio.id}
            className="mb-4 text-ternary-dark dark:text-ternary-light text-lg "
          >
          {bio.bio}
          </p>
        ))}
      </div>
    </div>
  );
}

export default AboutMeBio;
