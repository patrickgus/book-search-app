import React from "react";
import "./Book.css";

export default function Book(props) {
  return (
    <div className="book">
      <h2>{props.title}</h2>
      <div className="book-data">
        <img src={props.thumbnail} alt="book cover"/>
        <div className="book-info">
          <p>Author: {props.author}</p>
          <p>Price: ${props.price}</p>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}