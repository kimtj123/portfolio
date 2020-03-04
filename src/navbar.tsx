import React from 'react';
import './scss/navbar.scss';

function Navbar() {
  let home: string[] = ["HOME"]
  let list: string[] = ["ABOUT", "SKILLS", "PROJECTS", "CONTACT"];

  function navBarList(listArray: string[]) {
    let i: number = 0;
    let arr = [];

    for (i = 0; i < listArray.length; i++) {
      if (listArray.length !== 1) {
        arr.push(
          <li className="menu-items"> {listArray[i]}</li>
        )
      }
      else {
        arr.push(
          <li className="menu-home"> {listArray[i]}</li>
        )
      }

    }
    return arr;
  }

  return (
    <nav className="navbar">
      <div className="navbar-home">
        {navBarList(home)}
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
