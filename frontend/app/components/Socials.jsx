import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from "react-icons/ai";
import { SiInstagram } from "react-icons/si";

const Socials = () => {
  return (
    <div className="bg-[#F6F8FA] p-6 dark:bg-[#2C2C2C] mt-14 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2 font-InterRe">
          <div className="w-[6px] h-[6px] rounded-full bg-[#6b6b6b]" />
          <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
            Follow Me
          </h1>
        </div>

        <div className="flex gap-x-2">
          <a
            href="https://github.com/ejspeight"
            target="_blank"
            className="border-neutral-300 bg-white dark:bg-[#373737] dark:border-none shadow-md drop-shadow-md border w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1"
            aria-label="Github"
          >
            <AiFillGithub className="text-neutral-500 dark:text-white"/>
          </a>
          <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737] dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1">
            <SiInstagram className="text-neutral-500 dark:text-white" aria-label="Instagram" />
          </div>
          <a
            href="https://www.linkedin.com/in/edward-speight"
            target="_blank"
            // rel="noopener noreferrer"
            className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737] dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-neutral-500 dark:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;


          