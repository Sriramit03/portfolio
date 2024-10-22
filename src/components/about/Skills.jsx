import { frontEnd } from "../../data/skillsData";
import { backEnd } from "../../data/skillsData";
import { deployment } from "../../data/skillsData";
import { other } from "../../data/skillsData";
import React from "react";
function Skills() {
  return (
    <div className="mt-16">
      <h1 className="text-4xl text-center my-8  text-primary-dark dark:text-primary-light">Skills</h1>
      <div>
        <h2 className="text-2xl mt-2 mb-4  text-indigo-500">Front-end Technologies</h2>
        <ul className=" block sm:flex md:flex sm:gap-8 flex-wrap md:gap-6">
          {frontEnd.map((tech) => (
            <li key={tech.id} className="flex gap-2 my-2">
              <i className="text-4xl sm:text-5xl md:text-6xl text-gray-500" > {React.createElement(tech.icon)} </i> <span className=" text-xl sm:text-2xl sm:mt-1 md:mt-2 text-ternary-dark dark:text-ternary-light">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl mt-2 mb-4 text-indigo-500">Back-end Technologies</h2>
        <ul className=" block sm:flex md:flex sm:gap-8 flex-wrap md:gap-6">
          {backEnd.map((tech) => (
            <li key={tech.id} className="flex gap-2 my-2">
              <i className="text-4xl sm:text-5xl md:text-6xl text-gray-500">{React.createElement(tech.icon)}</i> <span className=" text-xl sm:text-2xl sm:mt-1 md:mt-2 text-ternary-dark dark:text-ternary-light">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl mt-2 mb-4 text-indigo-500">Deployment</h2>
        <ul className=" block sm:flex md:flex sm:gap-8 flex-wrap md:gap-6">
          {deployment.map((tech) => (
            <li key={tech.id} className="flex gap-2 my-2">
              <i className="text-4xl sm:text-5xl md:text-6xl text-gray-500">{React.createElement(tech.icon)}</i><span className=" text-xl sm:text-2xl sm:mt-1 md:mt-2 text-ternary-dark dark:text-ternary-light">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl mt-2 mb-4 text-indigo-500">Others</h2>
        <ul className=" block sm:flex md:flex sm:gap-8 flex-wrap md:gap-6">
          {other.map((tech) => (
            <li key={tech.id} className="flex gap-2 my-2">
              <i className="text-4xl sm:text-5xl md:text-6xl text-gray-500">{React.createElement(tech.icon)}</i><span className=" text-xl sm:text-2xl sm:mt-1 md:mt-2 text-ternary-dark dark:text-ternary-light">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}

export default Skills;
