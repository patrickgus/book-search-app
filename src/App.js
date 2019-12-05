import React, { Component } from "react";
import Header from "./Header/Header";
import BookList from "./BookList/BookList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  render() {
    return (
      <main className="App">
        <Header />
        <BookList />
      </main>
    );
  }
}

export default App;
