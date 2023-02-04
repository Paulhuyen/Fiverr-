import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

type Props = {};

export default function MenuPages({}: Props) {
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
    <nav className={ fix > 100 || location.pathname !== "/" ? "CategoriesMenu" : "CategoriesMenu setScrollMenu" } >
      <div className="CategoriesMenu_wrapper container">
        <div className="CategoriesMenu_row">
          <ul>
            <li >
              <a href="" className="menu">Graphics & Design</a>
              <div className="menu-sub">
                <div className="menu-sub-detail">
                  <p className="title"> Logo & Brand Identity</p>
                  <a href="">Logo Design</a>
                  <a href="">Brand Style Guides</a>
                </div>
                <div className="menu-sub-detail">
                  <p className="title"> Logo & Brand Identity</p>
                  <a href="">Logo Design</a>
                  <a href="">Brand Style Guides</a>
                </div>
              </div>
            </li>
            <li >
              <NavLink to="/categories"className="menu">Degital Marketing</NavLink>
            </li>
            <li >
              <a href=""className="menu">Writing & Translation</a>
            </li>
            <li >
              <a href=""className="menu">Video & Animation</a>
            </li>
            <li >
              <a href=""className="menu">Music & Audio</a>
            </li>
            <li >
              <a href=""className="menu">Programming & Tech</a>
            </li>
            <li >
              <a href=""className="menu">Business</a>
            </li>
            <li >
              <a href=""className="menu">Trending</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
