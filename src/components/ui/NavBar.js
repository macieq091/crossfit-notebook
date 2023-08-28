import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../../assets/images/logo.png'


const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    return (
        <div className="relative flex items-center justify-between  bg-orange-300 border-b border-gray-40 py-8 font-['Permanent_marker']">
          <Link to="/">
            <img src={logo} alt="App logo" className="h-40 w-40 lg:relative left-50"/>
          </Link>
          <nav>
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="HAMBURGER-ICON absolute space-y-2 right-6 "
                onClick={() => setIsNavOpen((prev) => !prev)} 
              >
                <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
              </div>
    
              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)} 
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link to="/WOD">wod</Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link to="/previous">Previous wod</Link>
                  </li>
                </ul>
              </div>
            </section>
    
            <ul className="DESKTOP-MENU hidden space-x-8 lg:flex absolute right-10 ">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/wod">wod</Link>
              </li>
              <li>
                <Link to="/previous">previous wod</Link>
              </li>
            </ul>
          </nav>
          <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: rgb(255 237 213);
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
        `}</style>
        </div>
      );
    }
export default Nav;