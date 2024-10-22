import React from "react";
import { aboutMeData } from "../../data/bio";
import profileImg from "../../images/Profile.jpg";
import "../../css/Tailwind.css";
function AboutMeBio() {
  return (
    <div className="block mt-10 ml-2 sm:flex sm:mt-20 sm:gap-10">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0 mt-1">
        <img src={profileImg} className="rounded-lg w-full" />
      </div>
      <div className="font-general-regular w-full sm:w-3/4 text-left  ">
        <h1 className="text-2xl md:3xl font-medium text-secondary-dark dark:text-secondary-light mb-2">
          ABOUT ME
        </h1>
        <h3 className="text-2xl text-indigo-500 mb-2 font-medium">
          Sriram - Java Full Stack Developer
        </h3>
        {aboutMeData.map((bio) => (
          <div key={bio.id}>
            <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg ">
              {bio.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMeBio;
