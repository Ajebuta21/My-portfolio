import { FaHome, FaGithub, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Nav = () => {
    const [navcolor, setNavcolor] = useState("sm:bg-white");
    const [navmobilecolor, setNavmobilecolor] = useState("bg-white");
    const [textcolor, setTextcolor] = useState("sm:text-slate-900");
    const [textmobilecolor, setTextmobilecolor] = useState("text-slate-900");
    const [scrollY, setScrollY] = useState(0);
    const [collapse, setCollapse] = useState(true);

    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });

    useEffect(() => {
      if (scrollY >= 580) {
        setNavcolor("bg-slate-900");
        setTextcolor("text-white");
      }

      if (scrollY >= 780) {
        setNavmobilecolor("max-sm:bg-slate-900");
        setTextmobilecolor("max-sm:text-white");
      }

      if (scrollY >= 1180 || scrollY < 580) {
        setNavcolor("bg-white");
        setTextcolor("text-slate-900");
      }
      if (scrollY >= 1580 || scrollY < 780) {
        setNavmobilecolor("max-sm:bg-white");
        setTextmobilecolor("max-sm:text-slate-900");
      }
    }, [scrollY]);
  return (
    <nav
      className={`h-[8vh] w-full shadow-md flex fixed justify-center ${navcolor} ${navmobilecolor} top-0`}
    >
      <div className="relative flex justify-between w-full h-full items-center">
        <h1 className="text-xl font-bold text-slate-500 pl-4">
          Elv<span className="text-slate-300">i</span>s
        </h1>
        <ul
          className={`flex w-1/3 justify-evenly font-semibold max-lg:absolute max-lg:flex-col max-lg:top-[8vh] max-lg:left-0 max-lg:w-full max-lg:justify-center max-lg:gap-12 max-lg:items-center max-lg:h-[25vh] ${navcolor} ${navmobilecolor}z-100 max-lg:shadow-md ${textcolor} ${textmobilecolor} ${
            collapse ? "max-lg:hidden" : ""
          }`}
        >
          <li className="text-md border border-transparent rounded-2xl hover:translate-y-1 hover:shadow-md hover:shadow-slate-500 px-3 py-1 cursor-pointer transition ease-in-out delay-75 flex items-center">
            <FaHome className="pr-2 text-2xl" /> <Link to="/">Home</Link>
          </li>
          <li className="text-md border border-transparent rounded-2xl hover:translate-y-1 hover:shadow-md hover:shadow-slate-500 px-3 py-1 cursor-pointer transition ease-in-out delay-75 flex items-center">
            <FaGithub className="pr-2 text-2xl" />
            <Link to="/my-github">My Github</Link>
          </li>
        </ul>
        <button
          onClick={() => setCollapse(!collapse)}
          className="hidden max-lg:block max-lg:pr-4"
        >
          <FaBars
            className={`hidden max-lg:block ${textcolor}  ${textmobilecolor}`}
          />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
