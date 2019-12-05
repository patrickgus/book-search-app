import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import TypeBars from "./TypeBars/TypeBars";
import "./NavBars.css";

class NavBars extends Component {
  render() {
    return (
      <div className="navbars">
        <SearchBar />
        <TypeBars />
      </div>
    );
  }
}

export default NavBars;
