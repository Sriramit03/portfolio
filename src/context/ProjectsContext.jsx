import { useEffect, useState } from "react";
import { projectData } from "../data/project";
import { createContext } from "react";

export const ProjectsContext = createContext();
export const ProjectProvider = (props) => {
  const [projects, setProjects] = useState(projectData);
  const [searchProject, setSearchProject] = useState("");
  const [selectProject, setSelectProject] = useState("");
  //Search function by title
  const searchProjectByTitle = projectData.filter((item) => {
    const result = item.name.toLowerCase().includes(searchProject.toLowerCase())
      ? item
      : searchProject === ""
      ? item
      : "";
    return result;
  });

  //Select projects by category
  const selectProjectByCategory = projectData.filter((item) => {
    let category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectProject);
  });

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        searchProject,
        setSearchProject,
        searchProjectByTitle,
        selectProject,
        setSelectProject,
        selectProjectByCategory,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};
