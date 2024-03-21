import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from "react-icons/ai";
import { SiInstagram } from "react-icons/si";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";

const Footer = () => {
  return (
    <div class="mt-24 p-2">
        <div class="mx-auto max-w-md">
            <div>
                <h2 class="text-4xl text-center dark:text-white text-[#353849] font-InterBo">
                    Let’s work together.
                </h2>
                <p class="text-center mt-3 dark:text-neutral-300 text-[#666D80] text-lg">
                    Creating user experience and visually appealing design
                </p>
            </div>

            <div class="">
                <div class="flex items-center gap-x-4 justify-center mt-6">
                    <div class="bg-black dark:bg-[#373737] w-fit shadow-md px-2 rounded-md flex items-center gap-x-2 py-1">
                        <AiOutlinePlusCircle class="text-white text-3" />
                        <span class="text-white font-semibold">Hire Me</span>
                    </div>
                    <div class="border-neutral-300 shadow-md border dark:border-neutral-700 w-fit h-8 px-2 rounded-md flex items-center gap-x-2">
                        <FiCopy class="" />
                        <span class="text-neutral-700 dark:text-white font-semibold">
                            Copy Email
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-[#F6F8FA] p-6 dark:bg-[#2C2C2C] mt-14 rounded-md">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-x-2 font-InterRe">
                    <h1 class="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                        Follow Me
                    </h1>
                </div>

                <div class="flex gap-x-2">
                    <a href="https://github.com/ejspeight" target="_blank" class="border-neutral-300 bg-white dark:bg-[#373737] dark:border-none shadow-md drop-shadow-md border w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1" aria-label="Github">
                        <AiFillGithub class="text-neutral-500 dark:text-white" />
                    </a>
                    <div href="https://www.instagram.com/edwahdoh" target="_blank" class="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737] dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1">
                        <SiInstagram class="text-neutral-500 dark:text-white" aria-label="Instagram" />
                    </div>
                    <a href="https://www.linkedin.com/in/edward-speight" target="_blank" class="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737] dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1" aria-label="LinkedIn">
                        <FaLinkedinIn class="text-neutral-500 dark:text-white" />
                    </a>
                </div>
            </div>
        </div>

        <div class="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6 mt-4 rounded-md">
            <div class="text-center">
                <span class="text-neutral-700 dark:text-neutral-400">
                    © 2023 Eddie Speight
                </span>
                <p class="text-neutral-500">
                    By <span class="hover:underline hover:text-neutral-400 text-neutral-700 dark:text-neutral-300">EdDev</span>
                </p>
            </div>
        </div>
    </div>

  );
};

export default Footer;