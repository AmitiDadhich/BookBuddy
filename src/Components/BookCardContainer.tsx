import React, { useState, useEffect } from "react";
import { BookInterface } from "../Interfaces/BookInterface";
import { sortBook } from "../Request";
import BookCard from "./BookCard";

interface BookCardContainerProps {
  searchTerm: string;
}

function BookCardContainer({ searchTerm }: BookCardContainerProps) {
  const [bookList, setBookList] = useState<BookInterface[]>([]);
  const [error, setError] = useState<string>("");
  const [orderBy, setOrderBy] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [saleabilityFilter, setSaleabilityFilter] = useState<string>("");

  useEffect(() => {
    const fetchBooksByOrder = async () => {
      try {
        let response;
        if (searchTerm.trim() !== "") {
          // Fetch books based on the selected sorting order
          response = await fetch(sortBook(searchTerm, orderBy));
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          if (data.items && data.items.length > 0) {
            let sortedBooks = data.items;
            // Filter books based on the selected filter and saleability
            const filteredBooks = sortedBooks
              .filter((book: BookInterface) => {
                const isEbook = book.saleInfo.isEbook;
                if (selectedFilter === "E-book") {
                  return isEbook;
                } else if (selectedFilter === "Book") {
                  return !isEbook;
                } else {
                  return true;
                }
              })
              .filter((book: BookInterface) => {
                if (saleabilityFilter === "Free-ebook") {
                  return book.saleInfo.saleability === "FREE";
                } else if (saleabilityFilter === "Paid-ebook") {
                  return book.saleInfo.saleability === "FOR_SALE";
                } else {
                  return true;
                }
              });
            setBookList(filteredBooks);
            setError("");
          } else {
            setError("No book found");
          }
        }
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Error fetching books");
      }
    };

    fetchBooksByOrder();
  }, [searchTerm, orderBy, selectedFilter, saleabilityFilter]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOrder = event.target.value;
    setOrderBy(selectedOrder);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  const handleSaleabilityFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSaleabilityFilter(event.target.value);
  };

  const renderBookCards = () => {
    if (error) {
      return <div>{error}</div>;
    } else {
      return (
        <div className="card-layout">
          {bookList.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="book-card-container">
      <div className="sortBookDropDown">
        <select
          id="filter"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="E-book">E-book</option>
          <option value="Book">Book</option>
        </select>
        <select
          id="saleability"
          value={saleabilityFilter}
          onChange={handleSaleabilityFilterChange}
        >
          <option value="">All</option>
          <option value="Free-ebook">Free-ebook</option>
          <option value="Paid-ebook">Paid-ebook</option>
        </select>
      </div>
      {renderBookCards()}
    </div>
  );
}

export default BookCardContainer;
