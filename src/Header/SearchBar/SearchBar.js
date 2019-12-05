import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <form className="search-bar">
        <label for="searh-term">Search: </label>
        <input type="text" placeholder="Search Books..." />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchBar;
