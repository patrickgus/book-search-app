import React, { Component } from "react";
import Header from "./Header/Header";
import BookList from "./BookList/BookList";
import "./App.css";

// const apiKey = 'AIzaSyD5Dga4orF8B--xLnrdgVqZ92um-nT-AOc';

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
        <BookList books={this.state.books}/>
      </main>
    );
  }
}

export default App;
