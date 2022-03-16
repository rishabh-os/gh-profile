import { useState } from "react";
import useDarkMode from "./useDarkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState("h-0 overflow-hidden");
  const [colorTheme, setTheme] = useDarkMode();
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  function toggleMenu() {
    setMenuOpen(menuOpen == "h-fit" ? "h-0 overflow-hidden" : "h-fit");
  }
  const [isDark, setIsDark] = useState(false);
  function toggleDarkModeButton(e: boolean) {
    e ? setTheme("dark") : setTheme("light");
    setIsDark(e);
  }

  return (
    <nav className="hero fixed top-0 z-50 w-full bg-white shadow dark:bg-gray-800">
      <div className=" px-2 py-2 md:flex md:justify-end">
        <div className="flex flex-row">
          <DarkModeSwitch
            className="ml-auto mt-1 md:mt-3"
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
          <div className="flex flex-col md:mx-2 md:flex-row">
            <a className="navButton" href="#">
              Home
            </a>
            <a className="navButton" href="#AboutMe">
              About Me
            </a>
            <a className="navButton" href="#Interests">
              Interests
            </a>
            <a className="navButton" href="#Experience">
              Experience
            </a>
            <a className="navButton" href="#Education">
              Education
            </a>
            <a className="navButton" href="#Skills">
              Skills
            </a>
            {/*//? Contact me button */}
            <a href="#Contact">
              <button
                className="group my-1 mr-2 w-40 items-center justify-center overflow-hidden whitespace-nowrap rounded-lg
                bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium text-white  hover:text-black dark:text-white md:ml-2"
              >
                <span
                  className="relative inline-flex w-full items-center justify-center rounded-md px-5 py-2.5 transition-all duration-150
                 ease-in group-hover:bg-gray-200 group-hover:bg-opacity-100 dark:group-hover:bg-black"
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
