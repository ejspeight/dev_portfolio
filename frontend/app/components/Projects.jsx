import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { FiArrowRight} from "react-icons/fi";


const Projects = () => {
    const [projects, setProjects] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    const getProjects = async () => {
        try {
            const response = await axios.get(`https://api.github.com/users/ejspeight/repos`);
            return response.data
        } catch (error) {
            throw error; 
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projects = await getProjects()
                const extractedFields = projects.map(item => {
                    return {
                      id: item.id,
                      name: item.name,
                      description: [item.description],
                      language: item.language,
                      url: item.html_url
                    };
                  });
                setProjects(extractedFields)
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();

    }, [])

    
    return (
        <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-3 max-md:p-3 rounded-xl">
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-x-2 font-InterRe">
              <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                Projects
              </h1>
            </div>

            <div className="border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#373737] shadow-md border  w-fit h-8 px-2 rounded-md  flex  items-center gap-x-1 ">
              <button className="text-neutral-700 dark:text-white  text-sm font-semibold">
                View All
              </button>
              <FiArrowRight className="text-neutral-500" />
            </div>
          </div>
          <div className="mt-6">
            <Link href={"/"}>
              {projects.map((link) => (
                <div
                  key={link.name}
                  className="bg-white dark:bg-[#373737] mt-3  mb-4 rounded-xl  max-md:flex-col max-md:items-start flex items-center justify-between p-5 dark:border-neutral-600  shadow-md drop-shadow-md dark:border max-md:p-7 "
                >
                  <div className="flex items-center gap-x-4 max-md:flex-col max-md:items-start">
                    <div className="drop-shadow-md dark:bg-neutral-900/50 bg-white  p-2 rounded-full ">
                      <img
                        className="w-10 h-10 object-cover rounded-full "
                        src={"img/github.png"}
                        alt=""
                      />
                    </div>

                    <div className="max-md:mt-5">
                      <h1 className="text-xl font-InterMe ">{link.name}</h1>
                      <p className="text-lg text-neutral-400 max-md:my-1">
                        {link.description.map((subt) => (
                          <span key={subt}>{subt}</span>
                        ))}
                      </p>
                    </div>
                  </div>

                  <div className="max-md:hidden md:block">
                    <BsChevronRight />
                  </div>
                </div>
              ))}
            </Link>
          </div>
        </div>
    );
  };
  
  export default Projects;