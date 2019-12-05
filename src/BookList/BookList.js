import React, { Component } from "react";
import Book from "./Book/Book";
import "./BookList.css";

class BookList extends Component {
  render() {
    const books = this.props.books.map((book, i) => (
      <Book {...book} key={i} />
    ));

    return <div className="bookList">{books}</div>;
  }
}

export default BookList;
