import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import CustomLogo from "../../assets/CustomLogo/CustomLogo";
import MenuPages from "../MenuPage/MenuPages";
import { CloseOutlined, BarsOutlined } from "@ant-design/icons";
type Props = {};

export default function Header({}: Props) {
  const location = useLocation();
  const [fix, setFix] = useState(0);
  useEffect(() => {
    const setFixed = () => {
      if (location.pathname === "/") {
        setFix(window.pageYOffset);
      } else if (location.pathname !== "/") {
        setFix(0);
      }
    };
    window.addEventListener("scroll", setFixed);
    setFixed();
    return () => window.removeEventListener("scroll", setFixed);
  }, [location.pathname]);

  return (
    <>
      <div
        className={
          fix > 0 || location.pathname !== "/"
            ? "main-header setScrollHeader"
            : "main-header"
        }
      >
        <header className="header-package container">
          <div className="header-row-wrapper">
            <div className="header-row">
            <label htmlFor="nav-mobile-input" className="header_bars-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
            </label>
              <div className="logo-fiverr">
                <NavLink to="/">
                  <CustomLogo
                    color={
                      fix > 0 || location.pathname !== "/"
                        ? "#404145"
                        : "#fff"
                    }
                  />
                </NavLink>
              </div>
              <div className="logo-fiverr_mobile">
                <NavLink to="/">
                  <CustomLogo color={"#404145"} />
                </NavLink>
              </div>
              <div className="fiverr-header-search">
                <div className="search-bar-package ip-search">
                  <form className="fr-search">
                    <input
                      type="text"
                      placeholder="seacrh"
                      className="search-input"
                    />
                    <button className="search-btn">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="fiverr-right">
                <div className="fiverr-right-wrapper">
                  <li>Fiverr Business</li>
                  <li>Explore</li>
                  <li>
                    <i className="fa-solid fa-globe"></i>
                    English
                  </li>
                  <li>US$ USD</li>
                  <li>Become a Seller</li>
                  <li>Sign in</li>
                  <li>
                    <a className="fiverr-join" href="">
                      Join
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="menu_categories">
          <MenuPages />
        </div>
      </div>

      <input type="checkbox" name="" className="nav_input" id="nav-mobile-input" hidden/>

 {/* Reponsiver header */}
      <label htmlFor="nav-mobile-input" className="header_overlay"></label>
      <header className="header-package_mobile">
        <div className="header-row-wrapper_mobile">
          <div className="header-row_mobile">
            <div className="header_close-btn">
              <i className="fa-regular fa-circle-xmark"></i>
            </div>
            <div className="logo-fiverr_mobile">
              <NavLink to="/">
                <CustomLogo color={"#404145"} />
              </NavLink>
            </div>
            <nav className="nav_mobile">
              <ul>
                <li>Fiverr Business</li>
                <li>Become a seller</li>
                <li>Sign in</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
