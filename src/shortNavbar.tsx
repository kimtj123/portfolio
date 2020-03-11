import React, { useState, useEffect } from 'react';
import './scss/navbar.scss';
import menu from "./img/menu.png"
import { Link, animateScroll as scroll } from 'react-scroll'
import useWindowSize from "./sub-component/getWidth"


function navBarList(listArray: string[]) {
  let i: number = 0;
  let arr = [];

  for (i = 0; i < listArray.length; i++) {
    if (listArray.length !== 1) {
      arr.push(
        <li className="menu-items">
          <Link activeClass="active" to={listArray[i].toLowerCase()} spy={true} smooth={true} offset={-67} duration={500}>
            {listArray[i]}
          </Link>
        </li>
      )
    }
    else {
      arr.push(
        <li className="menu-home" onClick={() => scroll.scrollTo(0)}>
          {listArray[i]}
        </li>
      )
    }
  }
  return arr;
}

function Navbar() {
  let windowSize = useWindowSize();

  let home: string[] = ["HOME"]
  let list: string[] = ["ABOUT", "SKILLS", "PROJECT", "CONTECT"];


  return (
    <nav className="navbar" >
      <div className="navbar-home">
        <ul>
        </ul>
      </div>
      <div className="navbar-menu">
        <ul>
        </ul>
      </div>
      <button className="sidebar-menu">
        <img src={menu} />
      </button>
    </nav>
  );
}

export default Navbar;


