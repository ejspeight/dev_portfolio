import axios from 'axios';
import { useState, useEffect } from 'react';
import { CiLocationArrow1 } from "react-icons/ci";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";

const PostsObject = [
    {
        img: "/img/pizza.png",
        title: "Project 1",
        subtitle: "Lorem ipsum d",
        icon: <BsChevronRight />,
    },
    {
        img: "/img/wink.png",
        title: "Project 2",
        subtitle: "Lorem ipsum dolor  amet",
    },
    {
        img: "/img/foot.png",
        title: "Project 3",
        subtitle: "Lorem  dolor sit amet",
    },
]; 



const Posts = () => {
    const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    const getPosts = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/posts/`);
            console.log("Response from first call", response.data)
            return response.data
        } catch (error) {
            throw error; 
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const posts = await getPosts()
                setPosts(posts);
                console.log('Posts from fetchData:', posts);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();

    }, [])

    
    
    return (
        <div>
            <div class="dark:bg-[#2C2C2C] bg-[#F6F8FA] md:p-6 p-2 mt-6 rounded-md">
                <div class="flex items-center gap-x-2 font-InterRe">
                    <div class="w-[6px] h-[6px] rounded-full bg-[#6b6b6b]"></div>
                    <h1 class="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                        Posts
                    </h1>
                </div>

                <div class="mt-8">
                    <Link href={"/"}>
                        {PostsObject.map((link) => (
                        <div key={link.subtitle} class="dark:bg-[#373737] bg-white mt-3 rounded-xl shadow-md flex max-md:flex-col max-md:items-start items-center justify-between p-5">
                            <div class="flex items-center gap-x-4">
                                <div class="drop-shadow-md">
                                    <img class="w-10 h-10 object-cover rounded-full" src={link.img} alt="" />
                                </div>
                                <div>
                                    <h1 class="text-xl font-InterMe">{link.title}</h1>
                                </div>
                            </div>
                            <div class="flex max-md:mt-4 w-fit items-center gap-x-3">
                                <p class="text-sm font-semibold uppercase text-neutral-40 bg-[#EDEFF3] dark:bg-neutral-600/50 dark:text-neutral-400 text-[#666D80] px-2 rounded-lg">
                                    {link.subtitle}
                                </p>
                                <div class="">
                                    <CiLocationArrow1 class="dark:text-neutral-400" />
                                </div>
                            </div>
                        </div>
                        ))}
                    </Link>
                </div>
            </div>
        </div>
    );
  };
  
  export default Posts;





        