import React, { Component } from "react";
import NavBars from "./NavBars/NavBars";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Google Book Search</h1>
        <NavBars />
      </div>
    );
  }
}

export default Header;
