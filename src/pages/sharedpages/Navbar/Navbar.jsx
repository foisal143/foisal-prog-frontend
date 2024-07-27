import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollValue(window.scrollY);
    });
  }, []);
  console.log(isOpen);
  return (
    <nav
      className={`navbar  transition-all duration-500 px-5 lg:px-20 z-20  lg:sticky top-0 overflow-hidden h-20 ${
        scrollValue > 50 ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <div data-aos="fade-right" className="flex-1 group">
        <Link to="/" className=" headerFont  text-3xl">
          <span className="group-hover:text-[aqua] transition-all duration-200">
            Foisal
          </span>{' '}
          <span className="text-[aqua] group-hover:text-white transition-all duration-200">
            Programer
          </span>
        </Link>
      </div>
      <div
        className={`lg:hidden transition-all duration-200 fixed right-5 ${
          scrollValue > 50
            ? 'p-5 border z-30 text-black bg-[aqua] rounded-full'
            : ''
        }`}
      >
        <button className="text-2xl" onClick={() => setIsopen(!isOpen)}>
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>
      <div
        className={`flex-none z-10 bg-dark text-font font-semibold w-full lg:w-fit lg:bg-transparent p-5 lg:p-0 top-20 transition-all duration-200 absolute lg:static ${
          isOpen ? 'left-0 h-[100vh] z-20' : '-left-[100vw] '
        }`}
      >
        <ul className="text-center space-y-5 lg:space-y-0 z-20 uppercase lg:text-left w-full lg:w-fit text-font navlist lg:flex gap-5 px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
