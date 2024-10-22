import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import Button from "./reusable/Button";
import Error from "./reusable/Error";

const selectOptions = ["Web Application"];

export const HireMeModal = ({ onClose, onRequest }) => {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
    >
       
      {/* Modal Backdrop */}
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>
      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
              <h5 className="text-primary-dark dark:text-primary-light text-xl">
                What projects are you looking for ?
              </h5>
              <button
                onClick={onClose}
                className="px-4 font-bold text-primary-dark dark:text-primary-light"
              >
                <FiX className="text-3xl" />
              </button>
            </div>
            <div className="modal-body p-5 w-full h-full">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="max-w-xl m-4 text-left"
              >
                <div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required=""
                    placeholder="Name"
                    aria-label="Name"
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light "
                  />
                </div>
                <div className="mt-6">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    required=""
                    placeholder="Email"
                    aria-label="Email"
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light "
                  />
                </div>
                <div className="mt-6">
                  <select
                    id="subject"
                    name="subject"
                    type="text"
                    required=""
                    aria-label="Project Category"
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light "
                  >
                    {selectOptions.map((option) => (
                      <option key={option} className="text-normal sm:text-md">{option}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-6">
                  <textarea
                    id="message"
                    name="message"
                    cols="14"
                    rows="6"
                    aria-label="Details"
                    placeholder="Project Description"
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light "
                  ></textarea>
                </div>
                <div className="mt-6 pb-4 sm:pb-1">
                  <span
                    onClick={onRequest}
                    type="submit"
                    aria-label="Submit request" 
                    className="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus-ring-indigo-900 duration-500"
                  >
                    <Button title="Send Request"></Button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      
    </motion.div>
  );
};
