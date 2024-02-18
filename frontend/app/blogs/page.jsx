"use client";

import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Posts from "../components/Posts";

const Page = () => {
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0, transition: { duration: 0.4 } }}
      className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl max-2xl md:mx-auto sm:mx-auto lg:px-0 "
    >
      <div className=" lg:p-6 p-4 max-md:p-5 ">
        <div className="flex items-center mt-4 px-6  gap-x-2 ">
          <h1 className="text-neutral-700   dark:text-[#C0C0C0] text-lg font-InterMe">
            Blogs
          </h1>
        </div>

        <div className=" mt-7 md:px-6 p-2 ">
          <h1 className="text-4xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800">
            Explore My Posts
          </h1>
          <p className="text-neutral-700 text-base my-7 leading-8 font-InterRe dark:text-[#C0C0C0]">
            Discover my portfolio, where purposeful interfaces meet captivating
            design. My work strives to enhance experiences and inspire.
          </p>
        </div>

        <Posts />

        <Footer />
          
      </div>
    </motion.div>
  );
}

export default Page;
