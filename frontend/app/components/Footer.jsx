const Footer = () => {
  return (
    <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6  mt-4 rounded-md">
        <div className="text-center">
            <span className="text-neutral-700 dark:text-neutral-400">
                © 2023 Eddie Speight
            </span>
            <p className="text-neutral-500">
                By{" "}
            <span className="hover:underline  hover:text-neutral-400 text-neutral-700 dark:text-neutral-300">
                EdDev
            </span>
            </p>
        </div>
    </div>
  );
};

export default Footer;