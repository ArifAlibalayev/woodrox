import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header id="Header">
      <nav className="uppernav">
        <div className="uppernavcontent">
          <p>Visit Us</p>
          <p>Online Support</p>
        </div>
        <div className="uppernavsocials">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-telegram"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-github"></i>
        </div>
      </nav>
      <nav className="undernav">
        <div className="undernavimgbox">
          <img src="https://preview.colorlib.com/theme/woodrox/img/logo.png.webp" />
        </div>
        <div className="undernavbtns">
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={(navData) =>
                  navData.isActive ? "active" : "pending"
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/About"}
                className={(navData) =>
                  navData.isActive ? "active" : "pending"
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li className="pagebtn">
              PAGES
              <div className="dropdown">
                <ul>
                  <li>
                    <Link
                      to={"/Projects"}
                      className={(navData) =>
                        navData.isActive ? "active" : "pending"
                      }
                    >
                      PROJECTS
                    </Link>
                  </li>
                  <li>PROJECT DETAILS</li>
                  <li>ELEMENTS</li>
                </ul>
              </div>
            </li>
            <li>BLOG</li>
            <li>
              <NavLink
                to={"/Contact"}
                className={(navData) =>(navData.isActive ? "active":"pending")}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
          
        </div>
        <div className="responsiveMenu"><i class="fa-solid fa-bars"></i></div>
      </nav>
    </header>
  );
}

export default Header;
