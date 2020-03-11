import React, { useState } from 'react';
import './scss/navbar.scss';
import menu from "./img/menu.png"
import { Link, animateScroll as scroll } from 'react-scroll'


function navBarList(listArray: string[]) {
  let i: number = 0;
  let arr = [];

  for (i = 0; i < listArray.length; i++) {
    if (listArray.length !== 1) {
      arr.push(
        <li className="menu-items" key={`menu-items${i}`}>
          <Link activeClass="active" to={listArray[i].toLowerCase()} spy={true} smooth={true} offset={-67} duration={500}>
            {listArray[i]}
          </Link>
        </li>
      )
    }
    else {
      arr.push(
        <li className="menu-home"
          key={`menu-home${i}`}
          onClick={() => scroll.scrollTo(0)}>
          {listArray[i]}
        </li>
      )
    }
  }
  return arr;
}

function Navbar() {
  let home: string[] = ["HOME"]
  let list: string[] = ["ABOUT", "SKILLS", "PROJECT", "CONTECT"];
  // let [visual, setVisual] = useState("visible")
  // let [navVisual, setNavVisual] = useState("hidden")

  // let buttonVisible: any = { visibility: visual };
  // let navVisible: any = { visibility: navVisual };


  return (
    <nav className="navbar" >
      <div className="navbar-home">
        <ul>
          {navBarList(home)}
        </ul>
      </div>
      <div className="navbar-menu">
        <ul>
          {navBarList(list)}
        </ul>
      </div>
      <button className="sidebar-menu">
        <img src={menu} />
      </button>
    </nav>
  );
}

export default Navbar;


