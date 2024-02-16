"use client";

import Link from "next/link";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";
import { motion } from "framer-motion";
import Socials from "../components/Socials";
import Footer from "../components/Footer";

const links = [
  {
    img: "/img/img1.png",
    title: "HBF",
    subtitle: ["Data Migration, Analytics, Testing, SQL"],
    icon: <BsChevronRight />,
    href: "/rectangle",
  },
  {
    img: "/img/wink.png",
    title: "IAG Developer Portal",
    subtitle: ["APIs, Serverless, Front-End"],
    href: "/morvalabs",
  },
  {
    img: "/img/foot.png",
    title: "AFG",
    subtitle: ["Front-End Dev, Automation UI testing, Oracle Fusion"],
    // redirect to other sites here
    href: "/simply",
  },
];

const projects = [
  {
    img: "/img/pizza.png",
    title: "Project 1",
    subtitle: "Lorem ipsum dolor sit amet",
    icon: <BsChevronRight />,
  },
  {
    img: "/img/wink.png",
    title: "Project 2",
    subtitle: "Lorem ipsum dolor sit amet",
  },
  {
    img: "/img/foot.png",
    title: "Project 3",
    subtitle: "Lorem ipsum dolor sit amet",
  },
];

function page() {
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0, transition: { duration: 0.4 } }}
      className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl max-2xl md:mx-auto sm:mx-auto lg:px-0 "
    >
      <div className=" lg:p-6 p-4 max-md:p-5 ">
        <div className="flex items-center mt-4 px-6  gap-x-2 ">
          <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
          <h1 className="text-neutral-700   dark:text-[#C0C0C0] text-lg font-InterMe">
            Posts
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

        <div>
          <div className="dark:bg-[#2C2C2C] bg-[#F6F8FA] md:p-6 p-2  mt-6 rounded-md">
            <div className="flex items-center gap-x-2 font-InterRe">
              <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
              <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                Products
              </h1>
            </div>

            <div className="mt-8">
              <Link href={"/"}>
                {projects.map((link) => (
                  <div
                    key={link.subtitle}
                    className="dark:bg-[#373737] bg-white mt-3 rounded-xl shadow-md flex  max-md:flex-col max-md:items-start items-center justify-between p-5 "
                  >
                    <div className="flex  items-center gap-x-4">
                      <div className="drop-shadow-md ">
                        <img
                          className="w-10 h-10 object-cover rounded-full "
                          src={link.img}
                          alt=""
                        />
                      </div>

                      <div>
                        <h1 className="text-xl font-InterMe">{link.title}</h1>
                      </div>
                    </div>

                    <div className="flex max-md:mt-4 w-fit items-center gap-x-3">
                      <p className="text-sm font-semibold uppercase text-neutral-40 bg-[#EDEFF3] dark:bg-neutral-600/50 dark:text-neutral-400 text-[#666D80]  px-2 rounded-lg ">
                        {link.subtitle}
                      </p>
                      <div className="">
                        <CiLocationArrow1 className="dark:text-neutral-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24 lg:p-2 ">
          <div className="mx-auto max-w-md">
            <div>
              <h2 className=" text-4xl text-center dark:text-white text-[#353849] font-InterBo">
                Let’s work together.
              </h2>
              <p className="text-center mt-3 dark:text-neutral-300 text-[#666D80] text-lg">
                Creating user experience and visual appealing design
              </p>
            </div>

            <div className="">
              <div className="flex items-center gap-x-4 justify-center mt-6">
                <div className="bg-black dark:bg-[#373737] w-fit shadow-md  px-2 rounded-md flex items-center gap-x-2 py-1">
                  <AiOutlinePlusCircle className="text-white tex-3" />
                  <span className="text-white  font-semibold">Hire Me</span>
                </div>
                <div className="border-neutral-300 dark:border-neutral-700 shadow-md border  w-fit h-8 px-2 rounded-md flex items-center gap-x-2 ">
                  <FiCopy className="" />
                  <span className="text-neutral-700  dark:text-white font-semibold">
                    Copy Email
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Socials />
          <Footer />
          
        </div>
      </div>
    </motion.div>
  );
}

export default page;
