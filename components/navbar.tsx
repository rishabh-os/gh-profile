import { useState } from "react";
import useDarkMode from "./useDarkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState("hidden");
  const [colorTheme, setTheme] = useDarkMode();
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  function toggleMenu() {
    setMenuOpen(menuOpen == "block" ? "hidden" : "block");
  }
  const [isDark, setIsDark] = useState(false);
  function toggleDarkModeButton(e: boolean) {
    e ? setTheme("dark") : setTheme("light");
    setIsDark(e);
  }

  return (
    <nav className="sticky top-0 z-50 w-screen bg-white shadow dark:bg-gray-800">
      <div className=" px-6 py-2">
        <div className="flex flex-row">
          <DarkModeSwitch
            className="ml-auto mt-1"
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
                  menuOpen == "block" ? "translate-y-3 rotate-45" : ""
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  menuOpen == "block" ? "opacity-0" : ""
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  menuOpen == "block" ? "-translate-y-3 -rotate-45 " : ""
                }`}
              />
            </button>
          </div>
        </div>
        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div className={` + md:flex ${menuOpen}`}>
          <div className="flex flex-col md:mx-6 md:flex-row">
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
            <button
              className="group mb-2 mr-2 w-40 items-center justify-center overflow-hidden whitespace-nowrap
              rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium text-white shadow-lg shadow-pink-500/50 hover:text-black dark:text-white dark:shadow-lg dark:shadow-pink-800/80"
            >
              <span
                className="relative inline-flex w-full items-center justify-center rounded-md px-5 py-2.5 transition-all duration-150
               ease-in group-hover:bg-gray-200 group-hover:bg-opacity-100 dark:group-hover:bg-black"
              >
                Contact me!
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
