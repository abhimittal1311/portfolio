import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    if (toggle) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [toggle]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo}
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer text-center`}>
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.title)}
                className="block">{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            ref={menuRef}
            className={`fixed top-0 left-0 w-full h-full bg-flashWhite z-10 flex flex-col items-center transition-all duration-300 ease-in-out ${
              toggle ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
            <div className="absolute top-4 right-4">
              <img
                src={close}
                alt="close"
                className="w-[22px] h-[22px] object-contain cursor-pointer"
                onClick={() => setToggle(false)}
              />
            </div>
            <ul className="list-none flex flex-col gap-6 items-center justify-start mt-[6rem]">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? 'text-french' : 'text-eerieBlack'
                  } text-[30px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer text-center`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}>
                  <a href={`#${nav.id}`} className="block">{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;