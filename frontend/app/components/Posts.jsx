


const Posts = () => {
    return (
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
    );
  };
  
  export default Posts;





        