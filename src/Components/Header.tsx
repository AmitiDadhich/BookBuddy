import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { getApiUrl } from "../Request";

// Define HeaderProps interface for header component props
interface HeaderProps {
  onSearch: (searchTerm: string) => void; // Function to handle search
}

// Header component definition
function Header({ onSearch }: HeaderProps) {
  // State to manage search term input
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Handler for input change event
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Update search term state
  };

  // Handler for key down event (e.g., pressing Enter key)
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission behavior
      onSearch(searchTerm); // Call the onSearch function with the current search term
      setSearchTerm(""); // Clear the search term input field
    }
  };

  // Render the header component
  return (
    <div className="background-image">
      {/* Text row */}
      <div className="text-row">
        “You will learn most things by looking, but reading gives<br></br>
        understanding. Reading will make you free.”
      </div>
      {/* Search bar */}
      <div className="search-bar">
        {/* Input field for search term */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange} // Handle input change event
          onKeyDown={handleKeyDown} // Handle key down event
        />
      </div>
    </div>
  );
}

// Export Header component
export default Header;
