import React, { useRef, useLayoutEffect } from 'react';
import './scss/navbar.scss';
import { Link, animateScroll as scroll } from 'react-scroll'

function Navbar() {
  let home: string[] = ["HOME"]
  let list: string[] = ["ABOUT", "SKILLS", "PROJECT", "CONTECT"];

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

  return (
    <nav className="navbar">
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
    </nav>
  );
}

export default Navbar;


