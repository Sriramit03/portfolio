import React, { useContext, useEffect } from "react";
import { FiClock, FiTag } from "react-icons/fi";
import { SingleContext } from "../../context/SingleProjectContext";
import { projectData } from "../../data/project";
const ProjectDetailsHeader = () => {
  const { idx, setIdx, objData } = useContext(SingleContext);
  useEffect(() => {
    projectData.map((project, index) => {
      if (project["selected"]) setIdx(index);
    });
    return () => {
      projectData.map((project, index) => {
        if (project["selected"]) projectData[index]["selected"] = false;
      });
    };
  }, []);

  return (
    <div>
      {/* Heading */}
      <div className="font-general-medium text-3xl text-left font-bold sm:text-4xl mt-14 sm:mt-20 mb-7  text-primary-dark dark:text-primary-light">
        <p>{objData.name}</p>
      </div>

      {/* Date and tags */}
      <div className="flex">
        <div className="flex flex-items-center mr-10 ">
          <FiClock className="text-lg   text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light ">
            {objData.date}
          </span>
        </div>
        <div className="flex flex-items-center mr-10 ">
          <FiTag className="text-lg   text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light ">
            {objData.tags}
          </span>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 mt-12">
        {objData.images.map((image, index) => {
          return (
            <div className="mb-10 sm:mb-0" key={index}>
              <img
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                src={image}
                alt={objData.title}
                key={objData.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDetailsHeader;
