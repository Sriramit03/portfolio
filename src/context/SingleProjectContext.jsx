import { projectData } from "../data/project";
import { createContext, useEffect, useState } from "react";
export const SingleContext = createContext();

export const SingleContextProvider = (props) => {
  const [idx, setIdx] = useState(0);
  const objData = projectData[idx];
  return (
    <SingleContext.Provider value={{ idx,setIdx, objData }}>
      {props.children}
    </SingleContext.Provider>
  );
};
