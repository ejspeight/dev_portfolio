"use client";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Footer from "../components/Footer";
import Projects from "../components/Projects";


const Page = () => {
  return (
    <div className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl max-2xl md:mx-auto sm:mx-auto lg:px-0 ">
      <div className=" lg:p-6 p-2 max-md:p-5 ">
        <div className="dark:bg-neutral-800 bg-[#F1F4F8] leading-8 rounded-lg p-4 flex gap-x-11">
          <div>
            <p>Client</p>
            <p>Company</p>
            <p>Project Type</p>
            <p>Year</p>
          </div>
          <div>
            <p>HBF</p>
            <p>Deloitte Australia</p>
            <p>Data Migration</p>
            <p>Jan-2023 | Apr-2024</p>
          </div>
        </div>

        <div className="px-4">
          <div className="drop-shadow-md  mt-8">
            <img
              className="w-12 h-12 object-cover rounded-full "
              src="/img/img1.png"
              alt=""
            />
          </div>

          <div>
            <h1 className="text-4xl font-InterBo my-5">Deloitte Consulting</h1>
            <p className="text-lg dark:text-neutral-300  text-neutral-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>

            <div className="border-neutral-300 mt-5 dark:border-neutral-700 bg-white dark:bg-[#373737] shadow-md border  w-fit h-8 px-2 rounded-md max-sm:flex-col flex items-center gap-x-1 ">
              <button className="text-neutral-700 dark:text-white  text-sm font-semibold">
                View All
              </button>
              <FiArrowRight className="text-neutral-500" />
            </div>

            <div className="mt-8">
              <img
                className="aspect-square rounded-lg"
                src="/img/img3.png"
                alt=""
              />
              <p className="my-5 text-lg dark:text-neutral-300  text-neutral-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <img
                className="aspect-square rounded-lg"
                src="/img/img5.png"
                alt=""
              />

              <h3 className="text-lg my-6 font-InterBo">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-lg dark:text-neutral-300  text-neutral-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <img
                className="aspect-square rounded-lg my-7"
                src="/img/img6.png"
                alt=""
              />

              <h3 className="text-lg my-6 font-InterBo">Our Solution</h3>
              <p className="text-lg dark:text-neutral-300  text-neutral-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        <Projects />
          
        <Footer />
          
      </div>
    </div>
  );
}

export default Page;
