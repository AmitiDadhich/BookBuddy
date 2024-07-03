import React from "react";
import { BookInterface } from "../Interfaces/BookInterface";
import { AiOutlineClose } from "react-icons/ai";

// Define props for BookPopup component
interface BookPopupProps {
  book: BookInterface; // Book object containing book details
  onClose: () => void; // Function to handle closing the popup
}

// BookPopup component to display book details as a popup
function BookPopup({ book, onClose }: BookPopupProps) {
  // Function to handle download button click
  const handleDownload = () => {
    // Check if acsTokenLink is available and the book is available for download
    if (book.accessInfo?.pdf.acsTokenLink && book.accessInfo.pdf.isAvailable) {
      // Redirect the user to the download link
      window.location.href = book.accessInfo.pdf.acsTokenLink;
    }
  };

  return (
    <div className="book-popup-overlay" onClick={onClose}>
      {/* Overlay to close the popup when clicked */}
      <div className="book-popup">
        {/* Popup container */}
        <div className="book-details">
          {/* Book details container */}
          <img
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt="Book cover"
          ></img>
          {/* Display book title */}
          <h2>{book.volumeInfo.title}</h2>
          {/* Display book subtitle if available */}
          {book.volumeInfo.subtitle && <h3>{book.volumeInfo.subtitle}</h3>}
          {/* Display book authors */}
          <p>
            <strong>Author(s):</strong> {book.volumeInfo.authors?.join(", ")}
          </p>
          {/* Display book published date */}
          <p>
            <strong>Published Date:</strong> {book.volumeInfo.publishedDate}
          </p>
          {/* Display book description */}
          <p>{book.volumeInfo.description}</p>
          {/* Render download button if book is available */}
          {book.accessInfo?.pdf.isAvailable ? (
            <button onClick={handleDownload}>Download</button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

// Export BookPopup component
export default BookPopup;
