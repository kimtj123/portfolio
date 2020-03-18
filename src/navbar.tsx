import React, { useState, useEffect } from 'react';
import './scss/navbar.scss';
import menu from "./img/menu.png"
import getWidth from "./sub-component/getWidth"
import { Link, animateScroll as scroll } from 'react-scroll'


function navBarList(listArray: string[]) {
  let i: number = 0;
  let arr = [];

  for (i = 0; i < listArray.length; i++) {
    if (listArray[i] === "HOME") {
      arr.push(
        <li className="menu-home" key={`menu-home${i}`}>
          <Link activeClass="active" to={listArray[i].toLowerCase()} spy={true} smooth={true} offset={-67} duration={500}>
            {listArray[i]}
          </Link>
        </li>
      )
    }
    else {
      arr.push(
        <li className="menu-items" key={`menu-items${i}`}>
          <Link activeClass="active" to={listArray[i].toLowerCase()} spy={true} smooth={true} offset={-67} duration={500}>
            {listArray[i]}
          </Link>
        </li>
      )
    }
  }
  return arr;
}

function Navbar() {
  let [position, checkPosition] = useState(0);
  let [navbar, navbarShow] = useState(false)
  // HOME 을 제외하고 float : right 시 먼저 위치한 value가 최 우측으로 가는 현상 발생
  // 이에 역순으로 넣어서 제작
  let list: string[] = ["HOME", "CONTACT", "PROJECT", "SKILLS", "ABOUT"];

  function onScroll() {
    checkPosition(window.scrollY);
    return window.scrollY;
  }

  function handleOutsideClick(e: any) {
    // ignore clicks on the component itself
    let targetName = e.target.parentNode.className;
    if (targetName === "menu-items" || targetName === "menu-home" || targetName === "App") {
      return;
    }
    navbarShow(!navbar);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  return (
    <nav
      className={position === 0 ? "navbar" : "navbar changed"}
    // onClick={handleOutsideClick}
    >
      <div className={!navbar ? "navbar-wrapper" : "navbar-wrapper visible"}>
        <div className="close" onClick={handleOutsideClick}>CLOSE(X)</div>
        <div className="navbar-contents">
          <ul>
            {navBarList(list)}
          </ul>
        </div>
      </div>
      <div
        className={!navbar ? "bar-open" : "bar-close"}
        onClick={handleOutsideClick}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;


