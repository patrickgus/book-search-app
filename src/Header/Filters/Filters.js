import React, { Component } from "react";
import "./Filters.css";

class Filters extends Component {
  render() {
    return (
      <div className="filters">
        <label for="print-type">Print Type: </label>
        <select id="print-type">
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>

        <label for="book-type">Book Type: </label>
        <select id="book-type">
          <option value="all">All</option>
          <option value="free-ebooks">Free eBooks</option>
          <option value="paid-ebooks">Paid eBooks</option>
        </select>
      </div>
    );
  }
}

export default Filters;
