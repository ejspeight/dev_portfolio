"use client";
import React from "react";
import Footer from "../components/Footer";
import Posts from "../components/Posts";
import Projects from "../components/Projects";

const Page = () => {
  return (
    <div className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl max-2xl md:mx-auto sm:mx-auto lg:px-0 ">
      <div className=" lg:p-6 p-4 max-md:p-5 ">
        <div className="flex items-center mt-4  gap-x-2 ">
          <h1 className="text-neutral-700   dark:text-[#C0C0C0] text-lg font-InterMe">
            Projects
          </h1>
        </div>

        <div>
          <h1 className="text-3xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800">
            My Work
          </h1>
          <p className="text-neutral-700 text-base my-7 leading-8 font-InterRe dark:text-[#C0C0C0]">
          Explore my portfolio, where purposeful interfaces intersect with clean, elegant design.
          My mission is to craft simplistic yet impactful systems and applications that facilitate
          meaningful connections between individuals and technology, ultimately contributing to the betterment of humanity.
          </p>
        </div>

        <Projects />

        <div className="lg:px-7">
          <h1 className="md:text-4xl text-3xl  font-InterBo mt-10 my-3 dark:text-white text-neutral-800">
            Explore My Blogs
          </h1>

          <p className="text-neutral-700 text-base my-7 leading-8 font-InterRe dark:text-[#C0C0C0]">
            Delve into my posts, where I discuss real-world challenges 
            I've encountered, insights gained, and solutions devised in my
            journey as a developer.
          </p>
        </div>

        <Posts />

        <Footer />

      </div>
    </div>
  );
}

export default Page;
