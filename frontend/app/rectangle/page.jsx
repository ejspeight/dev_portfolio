import Link from "next/link";
import React from "react";
import { FiArrowRight, FiCopy } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
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

        <div>
          <div className="bg-[#F6F8FA] mt-11 dark:bg-[#2C2C2C] p-6 max-md:p-3 rounded-xl">
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-x-2 font-InterRe">
                <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                  Projects
                </h1>
              </div>

              <div className="border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#373737] shadow-md border  w-fit h-8 px-2 rounded-md max-sm:flex-col flex items-center gap-x-1 ">
                <button className="text-neutral-700 dark:text-white  text-sm font-semibold">
                  View All
                </button>
                <FiArrowRight className="text-neutral-500" />
              </div>
            </div>
            <div className="mt-6">
              <div className="cursor-pointer">
                {links.map((link, indx) => (
                  <div
                    key={link.href}
                    className="bg-white dark:bg-[#373737] mt-3  mb-4 rounded-xl  max-md:flex-col max-md:items-start flex items-center justify-between p-5 dark:border-neutral-600  shadow-md drop-shadow-md dark:border max-md:p-7 "
                  >
                    <Link href={link.href}>
                      <div className="flex items-center gap-x-4 max-md:flex-col max-md:items-start">
                        <div className="drop-shadow-md">
                          <img
                            className="w-10 h-10 object-cover rounded-full "
                            src={link.img}
                            alt=""
                          />
                        </div>

                        <div className="max-md:mt-5">
                          <h1 className="text-xl font-InterMe ">
                            {link.title}
                          </h1>
                          <p className="text-lg text-neutral-400 max-md:my-1">
                            {link.subtitle.map((subt) => (
                              <span key={subt}>{subt}</span>
                            ))}
                          </p>
                        </div>
                      </div>
                    </Link>

                    <div className="max-md:hidden md:block">
                      <BsChevronRight />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
          
        <Footer />
          
      </div>
    </div>
  );
}

export default Page;
