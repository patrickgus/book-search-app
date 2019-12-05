import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Filters from "./Filters/Filters";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Google Book Search</h1>
        <SearchBar />
        <Filters />
      </div>
    );
  }
}

export default Header;
