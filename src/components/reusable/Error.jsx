import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import "../../css/Tailwind.css";
const Error = ({ show }) => {
  const [visible, setVisible] = useState(show);
  const classSetter = visible ? "block" : "hidden";
  return (
    <div className={classSetter}>
      <div className="flex flex-col w-full h-full items-center justify-center z-50">
        <div className=" w-78 h-40 p-2 sm:w-80 md:w-96  bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative mt-40">
          <div className="flex justify-between text-primary-dark dark:text-primary-light gap-60 ">
            <p className="text-xl"></p>
            <button onClick={() => setVisible(!visible)}>
              <FiX className="text-3xl " />
            </button>
          </div>
          <div className="flex  justify-center mt-5">
            <div>
              <p className="text-xl text-primary-dark dark:text-primary-light ">
                This is not implemented yet !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
