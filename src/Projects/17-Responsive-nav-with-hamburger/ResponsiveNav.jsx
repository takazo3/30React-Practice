import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { NavStyle } from "./NavStyled";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
export default function ResponsiveNav() {

  //Navbar
  const [showElement, setShowElement] = useState({
    nabvarNav: true,
    hamburgerIcon: false,
    closeIcon: false,
    navOpened: false,
  });

  useEffect(() => {
    window.onresize = () => {
      let windowWidth = window.innerWidth;
      (windowWidth > 600) &&  setShowElement({
          nabvarNav: true,
          hamburgerIcon: false,
        });
      (windowWidth < 600) &&  setShowElement({
          nabvarNav: false,
          hamburgerIcon: true,
        });
    };
  }, []);

  const openNav=()=>{
    setShowElement({
      nabvarNav: true,
      hamburgerIcon: false,
      closeIcon: true,
      navOpened: true,
    })
  };
  const closeNav=()=>{
    setShowElement({
      nabvarNav: false,
      hamburgerIcon: true,
      closeIcon: false,
      navOpened: false,
    })
  }
 //Toggle Avtive Class
  const [pageTitle, setPageTitle] = useState("");

  const handleActive = (e) => {
    document.querySelectorAll(".nav-link").forEach((navLink) => navLink.classList.remove("active"));
    e.target.classList.add("active");
    setPageTitle(e.target.innerText);
  };


  return (
    <>
    <NavStyle className={`navbar bg-info text-light ${showElement.navOpened && "showNavbar"}`}>
      <div className="navbar-logo">
        <a href="#" className="navbar-brand">
          PaveUp.Co
        </a>
        {/* open and close icons */}
        {showElement.hamburgerIcon && <AiOutlineMenu onClick={openNav}/>}
        {showElement.closeIcon && <AiOutlineClose onClick={closeNav}/>}
      </div>
      <div className="navbar-collapse">
        {showElement.nabvarNav ? 
        <ul className={`navbar-items ${showElement.navOpened && "showNavbar"}`}>
          <NavItem text={"home"} active="active" onClick={handleActive}/>
          <NavItem text={"about"} active="" onClick={handleActive}/>
          <NavItem text={"contact"} active="" onClick={handleActive}/>
        </ul> :null}
      </div>
    </NavStyle>
    <h1 className="title text-center text-info">{!pageTitle ? "Home":pageTitle}</h1>
    </>
  );
}
