"use client";

// import { AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import Projects from "./components/Projects";
import EmailCopyButton from "./components/EmailCopyButton";


export default function Home() {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
        className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl  max-2xl  md:mx-auto sm:mx-auto lg:px-0 "
      >
        <div className="p-2 lg:mx-4">
          <div className=" lg:p-6 p-3">
            <div className="flex justify-between  w-full">
              <div className="flex items-center gap-x-2 font-InterRe">
                <motion.h1
                  initial={{ x: 100, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.2, delay: 0.4 },
                  }}
                  className="text-neutral-700 dark:text-[#C0C0C0] max-md:text-xl font-InterMe"
                >
                  Full Stack Developer
                </motion.h1>
              </div>

              <Link href={"/contact"}>
                <div className="bg-[#F6F8FA] dark:bg-[#115e3b] h-6 w-6 lg:w-fit lg:px-3 rounded-full flex items-center justify-center gap-x-2">
                  <div className="w-2 h-2 rounded-full animate-ping dark:animate-none bg-[#28C780]" />
                  <p className="text-[#2b9364] hidden lg:flex text-xs font-semibold uppercase ">
                    Available for work
                  </p>
                </div>
              </Link>
            </div>

            <div className="  flex-col md:flex-row   my-16 flex items-center md:justify-between">
              <div className=" sm:order-2   max-md:mt-10 flex md:block md:flex-row items-center  flex-col md:order-1 order-2">
                <h1 className="text-4xl text-neutral-700 font-InterBo dark:text-white">
                  I'm Eddie
                </h1>

                <motion.p
                  initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.2, delay: 0.3 },
                  }}
                  className="  text-lg max-md:text-center  my-3 text-neutral-500 dark:text-neutral-300"
                >
                  Software developer from Perth, Australia. <br /> Currently working
                  at Deloitte.{" "}
                </motion.p>

                <div className="flex items-center gap-x-2 mt-6 ">
                {/* Commenting this button out, have no use for it yet. Could use in the future. */}
                  {/* <div className="bg-black dark:bg-[#373737] w-fit shadow-md  px-2 rounded-md flex items-center gap-x-2 py-1">
                    <AiOutlinePlusCircle className="text-white tex-3" />
                    <span className="text-white  font-semibold">Hire Me</span>
                  </div> */} 
                  <EmailCopyButton />
                </div>
              </div>
              <div className="border text-center flex md:justify-center border-neutral-200 dark:border-neutral-700 dark:bg-[#2C2C2C] w-fit md:order-1 order-1 rounded-full p-3 ">
                <motion.img
                  initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.4, delay: 0.5 },
                  }}
                  className="w-32 h-32 flex object-cover   rounded-full "
                  src="/img/ESpeight.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <Projects />
          <Posts />
          
        </div>

        <Footer />
      </motion.div>
    </>
  );
}
