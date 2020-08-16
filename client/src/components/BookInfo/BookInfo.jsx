import React, { Component } from "react";
import "./BookInfo.css"
import API from "../../utils/API";

class BookInfo extends Component {
  book = this.props.book;

deleteBook(book) {
  console.log(this.book._id)
  API.deleteOwnedBook(this.book._id)
  .then((res) => {
    console.log(res);
    this.props.onClose();
    window.location.reload();
  })
  .catch((err) => console.log(err));
}
  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={()=>this.props.onClose()}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Book Preview</p>
            <button
              className="delete modal-card-title"
              aria-label="close"
              onClick={()=>this.props.onClose()}
            ></button>
          </header>
          <section className="modal-card-body">
            <img
              src={this.book.image}
              alt={this.book.title}
              className="book-cover mr-4"
              style={{float: "left"}}
            />
            <p className="title is-3">{this.book.title}</p>
            <p className="subtitle is-5">Author(s): {this.book.authors}</p>
            <p className="has-text-justified">
              <strong>Description:</strong> {this.book.description}
            </p>
            <br />
            {/* <p>
              <strong>Rating:</strong> X/X
            </p> */}
          </section>
          <footer className="modal-card-foot">
            <button className="button is-danger" onClick={() =>this.deleteBook(this.book)}>Remove from Library</button>
            {/* <button className="button">Remove Button</button> */}
          </footer>
        </div>
      </div>
    );
  }
}

export default BookInfo;
