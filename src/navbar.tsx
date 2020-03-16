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
  let [navbar, navbarShow] = useState({ style: "none" })
  // HOME 을 제외하고 float : right 시 먼저 위치한 value가 최 우측으로 가는 현상 발생
  // 이에 역순으로 넣어서 제작
  let list: string[] = ["HOME", "CONTACT", "PROJECT", "SKILLS", "ABOUT"];

  function onScroll() {
    checkPosition(window.scrollY);
    return window.scrollY;
  }


  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  return (
    <nav className={position === 0 ? "navbar" : "navbar changed"} >
      {/* navbar-content를 크기에 따라 옵션을 주면 된다. */}
      <div className="navbar-contents">
        <ul>
          {navBarList(list)}
        </ul>
      </div>
      <button className="sidebar-menu" onClick={() => { console.log(1) }}>
        <img src={menu} />
      </button>
    </nav>
  );
}

export default Navbar;


