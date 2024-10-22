import { React, useContext } from "react";
import { SingleContext } from "../../context/SingleProjectContext";
const ProjectDescription = () => {
  const { objData } = useContext(SingleContext);
  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-10 mb-10">
      {/* Project description left side  */}
      <div className="w-full sm:w-2/4 text-left">
        {/* Objectives */}
        <div>
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            Objective
          </p>
          <p className="font-general-regular  text-ternary-dark dark:text-ternary-light mb-2">
            {objData.objective}
          </p>
        </div>
        {/* Tools and Technologies */}
        <div>
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            Tools and Technologies
          </p>
          <p className="font-general-regular  text-ternary-dark dark:text-ternary-light mb-2">
            {objData.tools}
          </p>
        </div>
        {/* Links */}
        <div>
          {objData.link ? (
            <div>
              <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                Link
              </p>
              <a
                href={objData.link}
                target="_blank"
                className="  hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer font-general-regular  text-ternary-dark dark:text-ternary-light mb-2"
              >
                {objData.link}
              </a>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <div className="w-full sm:w-2/4 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
          Description
        </p>
        {objData.description.map((des,index) => {
          return (
            <p
              className="font-general-regular  text-ternary-dark dark:text-ternary-light mb-2"
              key={index}
            >
              {des}{" "}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDescription;
