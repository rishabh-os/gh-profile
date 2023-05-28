import { useState } from "react";
import useDarkMode from "../useDarkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useMotionValueEvent, useScroll } from "framer-motion";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [topshadow, setTopshadow] = useState("");
  const [menuOpen, setMenuOpen] = useState("h-0 overflow-hidden");
  const [, setTheme] = useDarkMode();
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  function toggleMenu() {
    setMenuOpen(menuOpen == "h-fit" ? "h-0 overflow-hidden" : "h-fit");
  }
  var x = typeof window !== "undefined" ? localStorage.theme : "light";
  const [isDark, setIsDark] = useState(x === "dark");
  function toggleDarkModeButton(e: boolean) {
    e ? setTheme("dark") : setTheme("light");
    setIsDark(e);
  }
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setTopshadow(v > 0.001 ? "shadow-lg" : "");
  });
  return (
    <nav
      className={`hero fixed top-0 z-50 w-full transition-shadow duration-1000 ${topshadow}`}
    >
      <div className=" px-2 py-2 md:flex md:justify-end">
        <div className="flex flex-row">
          <DarkModeSwitch
            className="ml-auto mt-1 md:mt-[14px]"
            sunColor="white"
            moonColor="black"
            onChange={(e) => toggleDarkModeButton(e)}
            size={30}
            checked={isDark}
          />
          {/* <!-- Mobile menu button --> */}
          <div className="scale-75 focus:outline-none md:hidden ">
            <button
              className="group flex h-10 w-10 flex-col items-center rounded"
              onClick={toggleMenu}
            >
              <div
                className={`${genericHamburgerLine} ${
                  menuOpen == "h-fit" ? "translate-y-3 rotate-45" : ""
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  menuOpen == "h-fit" ? "opacity-0" : ""
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  menuOpen == "h-fit" ? "-translate-y-3 -rotate-45 " : ""
                }`}
              />
            </button>
          </div>
        </div>
        <div className={` ml-2  ${menuOpen} md:h-fit`}>
          <div className="md:space-x- flex flex-col md:mx-2 md:flex-row">
            <a className="navButton" href="#" onClick={toggleMenu}>
              Home
            </a>
            <a className="navButton" href="#AboutMe" onClick={toggleMenu}>
              About Me
            </a>
            <a className="navButton" href="#Interests" onClick={toggleMenu}>
              Interests
            </a>
            <a className="navButton" href="#Experience" onClick={toggleMenu}>
              Experience
            </a>
            <a className="navButton" href="#Education" onClick={toggleMenu}>
              Education
            </a>
            <a className="navButton" href="#Skills" onClick={toggleMenu}>
              Skills
            </a>
            {/*//? Contact me button */}
            <a href="#Contact" onClick={toggleMenu}>
              <button
                className="group my-1 mr-2 w-40 items-center justify-center overflow-hidden whitespace-nowrap rounded-lg
                bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-white  hover:text-black dark:text-white md:ml-2"
              >
                <span
                  className="relative inline-flex w-full items-center justify-center rounded-md px-5 py-2.5 font-inter text-lg font-bold transition-all
                 duration-150 ease-in group-hover:bg-gray-200 group-hover:bg-opacity-100 dark:group-hover:bg-gray-800"
                >
                  Contact me!
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
