import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import BookCardContainer from "./Components/BookCardContainer";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function HomePageLayout() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="app">
      <NavBar />
      <Header onSearch={handleSearch} />
      {/* Render the BookCardContainer with search term */}
      <BookCardContainer searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default HomePageLayout;