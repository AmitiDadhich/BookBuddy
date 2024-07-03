import React, { useState } from "react";
import { BookInterface } from "../Interfaces/BookInterface";
import BookPopup from "./BookDetails";

interface BookCardProps {
  book: BookInterface;
}

function BookCard({ book }: BookCardProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="bookCard">
      <div className="card-image" onClick={togglePopup}>
        <img src={book.volumeInfo.imageLinks?.thumbnail} alt="Book cover" />
      </div>
      <div className="card-content">
        <h4>{book.volumeInfo.title}</h4>
        <p>
          {book.volumeInfo.authors?.join(", ")}
          <br />
          {book.volumeInfo.publishedDate}
          <br />
          {book.volumeInfo.categories}
        </p>
      </div>

      {isPopupOpen && <BookPopup book={book} onClose={togglePopup} />}
    </div>
  );
}

export default BookCard;
